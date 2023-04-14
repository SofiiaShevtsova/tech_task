import { useEffect, useState } from "react";
import MyLoader from "../../components/Loader/Loader";
import {
  BoxForHeader,
  Links,
  HomeMain,
  ListOfImagesStyle,
  TextHome,
  ImageItem,
} from "./styleHome";
import { getImage } from "../../service/imageList";

const Home = () => {
  const [imageList, setImageList] = useState([]);
  const [isLoading, setLoader] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      setLoader(true);
      const images = await getImage(Math.floor(Math.random() * 10));
      setImageList(() => [...images]);
      setLoader(false);
    };
    getImages();
  }, []);

  return (
    <>
      <BoxForHeader>
        <Links to="/">Home</Links>
        <Links to="/tweets">Tweets</Links>
      </BoxForHeader>
      <HomeMain>
        {isLoading ? (
          <MyLoader />
        ) : (
          <>
            <TextHome>funny tweets</TextHome>
            <ListOfImagesStyle>
              {imageList.map((image) => (
                <ImageItem key={image.id}>
                  <img
                    src={image.webformatURL}
                    alt={image.tags}
                    width="300px"
                    height="200px"
                  />
                </ImageItem>
              ))}
            </ListOfImagesStyle>
          </>
        )}
      </HomeMain>
    </>
  );
};

export default Home;
