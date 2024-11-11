import styled from "styled-components";
import { ProfileCard } from "./components/ProfileCard";
import { ActiveCard } from "./components/ActiveCard";
import { useState } from "react";
import timeframes from "utils/data.json";
import icon_work from "assets/icon-work.svg";
import icon_play from "assets/icon-play.svg";
import icon_study from "assets/icon-study.svg";
import icon_exercise from "assets/icon-exercise.svg";
import icon_social from "assets/icon-social.svg";
import icon_selfcare from "assets/icon-self-care.svg";

export default function App() {
  const [active, setActive] = useState("daily");
  const active_title = [
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
      title: "Exercise",
      color: "hsl(145, 58%, 55%)",
      icon: icon_exercise,
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

  const mergedData = timeframes.map((item) => {
    const findItem = active_title.find((data) => data.title === item.title);
    return {
      ...item,
      color: findItem.color,
      icon: findItem.icon,
    };
  });

  return (
    <Layout>
      <ProfileCard active={active} setActive={setActive} />
      <ActiveGrid>
        {mergedData.map((data, idx) => (
          <ActiveCard key={idx} tf={data} active={active} />
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
