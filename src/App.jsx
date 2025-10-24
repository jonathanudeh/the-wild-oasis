import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Button
          variation="primary"
          size="medium"
          onClick={() => alert("Check in")}
        >
          Check in
        </Button>
      </StyledApp>
    </>
  );
}

export default App;
