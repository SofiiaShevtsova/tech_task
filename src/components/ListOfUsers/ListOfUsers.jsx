import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { getUsersList } from "../../service/usersList";
import {
  BoxForCard,
  BtnPagination,
  BoxForPagination,
  Page,
} from "./styleUsersList";

const ListOfUsers = () => {
  const [usersList, setUsersList] = useState([]);
  const [page, setPage] = useState(1);
  const [isDisabled, setDisable] = useState(false);
  const [isPagination, setPagination] = useState(true);

  const addMore = async () => {
    try {
      setPage(page + 1);
      const { data } = await getUsersList(page);
      setUsersList((prev) => [...prev, ...data]);
      if (data.length < 8) {
        setDisable(true);
      }
      setPagination(false);
    } catch (error) {}
  };

  useEffect(() => {
    const getUsres = async () => {
      try {
        if (usersList.length > 8) {
          return;
        }
        const { data } = await getUsersList(page);
        setUsersList(() => [...data]);
        if (data.length < 8) {
          setDisable(true);
        }
      } catch (error) {}
    };
    getUsres();
  }, [page, usersList.length]);

  return (
    <>
      <BoxForCard>
        {usersList.map((it) => (
          <Card user={it} key={it.id} />
        ))}
      </BoxForCard>
      <BoxForPagination>
        <BtnPagination onClick={addMore} disabled={isDisabled}>
          Load more
        </BtnPagination>
      </BoxForPagination>
      {isPagination && (
        <BoxForPagination>
          <BtnPagination
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page === 1 ? true : false}
          >
            Prev
          </BtnPagination>
          <Page>{page}</Page>
          <BtnPagination
            onClick={() => setPage((prev) => prev + 1)}
            disabled={isDisabled}
          >
            Next
          </BtnPagination>
        </BoxForPagination>
      )}
    </>
  );
};
export default ListOfUsers;
