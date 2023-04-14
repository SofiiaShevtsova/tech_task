import { MagnifyingGlass } from "react-loader-spinner";
import styled from "styled-components";

const BoxForLoader = styled.div`
  width: 100vw;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyLoader = () => {
  return (
    <BoxForLoader>
      <MagnifyingGlass
        visible={true}
        height="100"
        width="100"
        ariaLabel="MagnifyingGlass-loading"
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="rgb(127, 255, 212)"
        color="blue"
      />
    </BoxForLoader>
  );
};

export default MyLoader;
