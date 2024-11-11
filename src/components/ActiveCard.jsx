import styled from "styled-components";
import ellipsis from "assets/icon-ellipsis.svg";

export const ActiveCard = ({ themeColor }) => {
  return (
    <OutLayout bg={themeColor}>
      <IconImg src={themeColor.icon} />
      <InLayout>
        <Title>
          <p>{themeColor.title}</p>
          <img src={ellipsis} />
        </Title>
        <Time></Time>
      </InLayout>
    </OutLayout>
  );
};

const OutLayout = styled.div`
  height: 240px;
  width: 280px;
  position: relative;
  display: flex;
  align-items: flex-end;
  border-radius: 20px;
  opacity: 0.8;
  background-color: ${({ bg }) => bg.color};
`;
const IconImg = styled.img`
  height: 80px;
  width: 50px;
  position: absolute;
  top: 0px;
  right: 6px;
  margin-right: 10px;
`;
const InLayout = styled.div`
  height: 180px;
  width: 280px;
  z-index: 1;
  border-radius: 15px;
  background-color: ${({ theme: { netural_color } }) => netural_color.dark_blue};
  &:hover {
    background-color: #433878;
    cursor: pointer;
  }
`;
const Title = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: bold;
`;
const Time = styled.div``;
