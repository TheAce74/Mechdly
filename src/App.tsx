import Header from "@/components/ui/Header";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <Container as="main" maxW={1900} p={0} className="">
      <Header />
    </Container>
  );
}

export default App;
