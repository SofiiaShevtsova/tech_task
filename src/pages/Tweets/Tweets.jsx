import { useState } from "react";
import ListOfUsers from "../../components/ListOfUsers/ListOfUsers";
import { BoxForHeader, LinkBack, LabelSelect, Select } from "./styleTweets";

const Tweets = () => {
  const [filter, setFilter] = useState("show all");

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <BoxForHeader>
        <LinkBack to="/">Back</LinkBack>
        <LabelSelect htmlFor="filter">Choose a filter:</LabelSelect>
        <Select name="filter" id="filter" onChange={changeFilter}>
          <option value="show all">show all</option>
          <option value="follow">follow</option>
          <option value="followings">followings</option>
        </Select>
      </BoxForHeader>
      <ListOfUsers filter={filter} />
    </>
  );
};

export default Tweets;
