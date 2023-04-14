import axios from "axios";

const { REACT_APP_BASE_URL } = process.env;

export const getUsersList = async (page = 1, filter) => {
  
  const url = new URL(REACT_APP_BASE_URL);
  url.searchParams.append("page", page);
  url.searchParams.append("limit", 8);
  if (filter === 'follow') {
  url.searchParams.append('isFollowing', false);
  }
  if (filter === 'followings') {
  url.searchParams.append('isFollowing', true);
  }

  try {
    const {data} = await axios.get(url);

    return data;
  } catch (error) {}
};




export const updateUser = async (id, data) => {
  try {
    await axios.put(
      `${REACT_APP_BASE_URL}/${id}`,
      data
    );
  } catch (error) {}
};
