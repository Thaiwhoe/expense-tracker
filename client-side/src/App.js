import styled from "styled-components";
import Orb from "./components/orb/orb";
import bg from './img/bg.png'
import { MainLayouts } from './styles/layouts'
import Navigation from "./components/navigation/navigation";
import { useMemo, useState } from "react";
import Dashboard from "./components/Dashboard/dashboard";
import Income from "./components/Incomes/income";
import Expenses from "./components/Expenses/expenses";

function App() {
  const [active, setActive] = useState(1)
  
  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])

  const displayData = () =>{
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4:
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  return (
    <AppStyled bg = {bg} className="App">
      {/* <Orb /> */}
      {orbMemo}
      <MainLayouts>
        <Navigation active = {active} setActive = {setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayouts>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;

  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
