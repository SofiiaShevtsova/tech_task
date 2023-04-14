import axios from "axios";

export const getUsersList = async (page = 1, filter) => {
  
  const url = new URL(
    "https://63af5dd2cb0f90e514726ce0.mockapi.io/contacts/users"
  );
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
      `https://63af5dd2cb0f90e514726ce0.mockapi.io/contacts/users/${id}`,
      data
    );
  } catch (error) {}
};
