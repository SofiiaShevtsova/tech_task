import { useEffect, useState } from "react";
import MyLoader from "../Loader/Loader";
import Card from "../Card/Card";
import { BoxForCard, BtnPagination, BoxForPagination } from "./styleUsersList";
import { getUsersList } from "../../service/usersList";

const ListOfUsers = ({ filter }) => {
  const [usersList, setUsersList] = useState([]);
  const [page, setPage] = useState(1);
  const [isDisabled, setDisable] = useState(true);
  const [isLoading, setLoader] = useState(false);

  const addMore = async () => {
    const data = await getUsersList(page + 1, filter);
    setUsersList((prev) => [...prev, ...data]);
    if (data.length < 8) {
      setDisable(false);
    }
    setPage(page + 1);
  };

  useEffect(() => {
    const getUsres = async () => {
      setLoader(true);
      const data = await getUsersList(1, filter);
      setUsersList(() => [...data]);
      setDisable(true);
      setPage(1);
      if (data.length < 8) {
        setDisable(false);
      }
      setLoader(false);
    };
    getUsres();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <>
      {isLoading ? (
        <MyLoader />
      ) : (
        <>
          <BoxForCard>
            {usersList.map((it) => (
              <Card user={it} key={it.id} />
            ))}
          </BoxForCard>
          {isDisabled && (
            <BoxForPagination>
              <BtnPagination onClick={addMore}>Load more</BtnPagination>
            </BoxForPagination>
          )}
        </>
      )}
    </>
  );
};
export default ListOfUsers;
