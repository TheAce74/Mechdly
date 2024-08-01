import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <Container as="main" maxW={1900} p={0} className="">
      <Header />
      <Hero />
    </Container>
  );
}

export default App;
