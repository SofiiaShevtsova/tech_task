import axios from 'axios';
console.log(process.env);

const { API_KEY } = process.env;

export const getImage = async (page) => {
  const options =
    `key=${API_KEY}&min_height=1200&image_type=photo&orientation=horizontal&safesearch=true&per_page=8`;
  const baseUrl = 'https://pixabay.com/api/';

  try {
    const response = await axios.get(
      `${baseUrl}?${options}&page=${page}&tweets`
    );
    if (response.data.hits.length === 0) {
      throw new Error();
    }

    return response.data.hits;
  } catch (error) {
  }
};