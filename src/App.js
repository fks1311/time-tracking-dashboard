import styled from "styled-components";
import { ProfileCard } from "./components/ProfileCard";
import { ActiveCard } from "./components/ActiveCard";

export default function App() {
  return (
    <Layout>
      <ProfileCard />
    </Layout>
  );
}

const Layout = styled.div`
  width: ${window.innerWidth}px;
  height: ${window.innerHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { netural_color } }) => netural_color.very_dark_blue};
`;
