import styled from "styled-components";
import Orb from "./components/orb/orb";
import bg from './img/bg.png'
import { MainLayouts } from './styles/layouts'
import Navigation from "./components/navigation/navigation";
import { useMemo, useState } from "react";

function App() {
  const [active, setActive] = useState(1)
  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])
  return (
    <AppStyled bg = {bg} className="App">
      {/* <Orb /> */}
      {orbMemo}
      <MainLayouts>
        <Navigation active = {active} setActive = {setActive} />
      </MainLayouts>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
`;

export default App;
