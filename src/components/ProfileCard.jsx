import styled from "styled-components";
import "utils/font/font.css";
import jeremy from "assets/image-jeremy.png";

export const ProfileCard = () => {
  const states = ["Daily", "Weekly", "Monthly"];

  return (
    <OutLayout>
      <InLayout>
        <Img src={jeremy} alt="jeremy_profilie" />
        <Profile>
          <span>Report for</span>
          <p>
            Jeremy
            <br />
            Robson
          </p>
        </Profile>
      </InLayout>
      {states.map((data) => (
        <State>{data}</State>
      ))}
    </OutLayout>
  );
};

const OutLayout = styled.div`
  width: 250px;
  height: 500px;
  border-radius: 20px;
  background-color: ${({ theme: { netural_color } }) => netural_color.dark_blue};
`;
const InLayout = styled.div`
  width: 250px;
  height: 350px;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: ${({ theme: { netural_color } }) => netural_color.desaturated_blue};
`;

const Img = styled.img`
  width: 100px;
  padding: 30px;
`;
const Profile = styled.div`
  padding: 0px 40px;
  line-height: 2rem;
  span {
    color: white;
    font-size: 13px;
    font-weight: lighter;
  }
  p {
    color: white;
    font-size: 35px;
    font-weight: lighter;
    line-height: 2.5rem;
  }
`;
const State = styled.div`
  color: white;
  opacity: 0.3;
  padding: 10px 30px;

  &:hover {
    color: white;
    opacity: 1;
    cursor: pointer;
  }
`;
