import Availability from "@/components/ui/Availability";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <Container as="main" maxW={1900} p={0}>
      <Header />
      <Hero />
      <Availability />
    </Container>
  );
}

export default App;
