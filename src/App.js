import styled from "styled-components"
import Header from "./components/Header";
import Wallets from "./components/Wallets";
import Latest from "./components/Latest";
import Exchange from "./components/Exchange";

function App() {
  return (
    <Container>
       <Header />

       <Container1>
        <Main>
          <Wallets />
          <Latest/>
        </Main>

        <Side>
          <Exchange />
        </Side>
       </Container1>
       
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 1500px;
  height: 820px;
  margin: auto;
  width: auto;
  margin-top: 60px;
  border-radius: 20px;
  background-color: #212129;
  flex-direction: column;
  white-space: nowrap;
  position: relative;
`
const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  max-height: 100%;
  max-width: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
`
const Side = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  max-height: 100%;
  max-width: 100%;
 
`
const Main = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  max-height: 100%;
  max-width: 65%;
`


export default App;
