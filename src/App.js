import styled from "styled-components";
import { ProfileCard } from "./components/ProfileCard";
import { ActiveCard } from "./components/ActiveCard";
import icon_work from "assets/icon-work.svg";
import icon_play from "assets/icon-play.svg";
import icon_study from "assets/icon-study.svg";
import icon_excercise from "assets/icon-exercise.svg";
import icon_social from "assets/icon-social.svg";
import icon_selfcare from "assets/icon-self-care.svg";

export default function App() {
  const active = [
    {
      title: "Work",
      color: "hsl(15, 100%, 70%)",
      icon: icon_work,
    },
    {
      title: "Play",
      color: "hsl(195, 74%, 62%)",
      icon: icon_play,
    },
    {
      title: "Study",
      color: "hsl(348, 100%, 68%)",
      icon: icon_study,
    },
    {
      title: "Excercise",
      color: "hsl(145, 58%, 55%)",
      icon: icon_excercise,
    },
    {
      title: "Social",
      color: "hsl(264, 64%, 52%)",
      icon: icon_social,
    },
    {
      title: "Self Care",
      color: "hsl(43, 84%, 65%)",
      icon: icon_selfcare,
    },
  ];

  return (
    <Layout>
      <ProfileCard />
      <ActiveGrid>
        {active.map((data, idx) => (
          <ActiveCard key={idx} themeColor={data} />
        ))}
      </ActiveGrid>
    </Layout>
  );
}

const Layout = styled.div`
  width: ${window.innerWidth}px;
  height: ${window.innerHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: ${({ theme: { netural_color } }) => netural_color.very_dark_blue};
`;
const ActiveGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
