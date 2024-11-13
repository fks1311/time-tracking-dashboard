import styled from "styled-components";
import "utils/font/font.css";
import jeremy from "assets/image-jeremy.png";

export const ProfileCard = ({ active, setActive }) => {
  const states = ["Daily", "Weekly", "Monthly"];

  return (
    <OutLayout>
      <InLayout>
        <Img src={jeremy} alt="jeremy_profilie" />
        <Profile>
          <span>Report for</span>
          <div>Jeremy Robson</div>
        </Profile>
      </InLayout>
      <StateLayout>
        {states.map((data, idx) => (
          <State
            key={idx}
            active={active}
            onClick={() => {
              setActive(data.toLowerCase());
            }}
          >
            {data}
          </State>
        ))}
      </StateLayout>
    </OutLayout>
  );
};

const OutLayout = styled.div`
  width: 250px;
  height: 500px;
  border-radius: 20px;
  background-color: ${({ theme: { netural_color } }) => netural_color.dark_blue};
  @media ${({ theme }) => theme.breakpoints.mobile} {
    height: 180px;
    width: 280px;
  }
`;
const InLayout = styled.div`
  width: 250px;
  height: 350px;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: #4e31aa;
  @media ${({ theme }) => theme.breakpoints.mobile} {
    height: 120px;
    width: 280px;
    display: flex;
    align-items: center;
  }
`;

const Img = styled.img`
  width: 80px;
  padding: 30px;
  @media ${({ theme }) => theme.breakpoints.mobile} {
    height: 70px;
    width: 70px;
  }
`;
const Profile = styled.div`
  padding: 0px 40px;
  line-height: 2rem;
  span {
    color: white;
    font-size: 13px;
    font-weight: lighter;
  }
  div {
    color: white;
    font-size: 35px;
    font-weight: lighter;
    line-height: 2.5rem;
  }
  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding: 0px;
    margin-top: 10px;
    line-height: 0.5rem;
    div {
      font-size: 20px;
    }
  }
`;
const StateLayout = styled.div`
  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: flex;
    justify-content: center;
    padding: 0px 10px;
  }
`;
const State = styled.div`
  color: white;
  opacity: 0.6;
  padding: 10px 30px;
  &:hover {
    color: white;
    opacity: 1;
    cursor: pointer;
  }
  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    font-size: 15px;
  }
`;
