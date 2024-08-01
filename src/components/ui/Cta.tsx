import LandingSection from "@/components/layout/LandingSection";
import { Box, Heading, Image } from "@chakra-ui/react";
import logo from "@/assets/logo.svg";
import Button from "@/components/ui/Button";

export default function Cta() {
  return (
    <LandingSection id="cta" outerClass="!min-h-max">
      <Box className="md:flex-starter border-primary-200 grid place-content-center place-items-center gap-3 border-b-2 pb-8">
        <Image src={logo} alt="logo" w={[100, 130]} />
        <Box className="grid place-content-center place-items-center gap-5 md:flex md:items-center md:gap-6">
          <Heading fontWeight="semibold">Ready for your setup?</Heading>
          <Button>Get started</Button>
        </Box>
      </Box>
    </LandingSection>
  );
}
