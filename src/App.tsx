import Availability from "@/components/ui/Availability";
import Cta from "@/components/ui/Cta";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import Reminders from "@/components/ui/Reminders";
import Services from "@/components/ui/Services";
import Testimonials from "@/components/ui/Testimonials";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <Container as="main" maxW={1900} p={0}>
      <Header />
      <Hero />
      <Availability />
      <Reminders />
      <Services />
      <Testimonials />
      <Cta />
    </Container>
  );
}

export default App;
