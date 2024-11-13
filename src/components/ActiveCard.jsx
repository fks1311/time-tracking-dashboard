import styled from "styled-components";
import ellipsis from "assets/icon-ellipsis.svg";

export const ActiveCard = ({ tf, active }) => {
  return (
    <OutLayout tf={tf}>
      <IconImg src={tf.icon} />
      <InLayout>
        <Title>
          <p>{tf.title}</p>
          <img src={ellipsis} />
        </Title>
        <Time>
          <div>{tf.timeframes[active].current}hrs</div>
          <p>Last Week - {tf.timeframes[active].previous}hrs</p>
        </Time>
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
  background-color: ${({ tf }) => tf.color};
  @media ${({ theme }) => theme.breakpoints.mobile} {
    height: 140px;
  }
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
  @media ${({ theme }) => theme.breakpoints.mobile} {
    height: 100px;
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
const Time = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  div {
    color: white;
    font-size: 45px;
    font-weight: lighter;
  }
  p {
    color: white;
    font-size: 13px;
    opacity: 0.6;
    margin-top: 10px;
  }
  @media ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 20px;
    div {
      font-size: 30px;
    }
  }
`;
