import { Box, Heading, Image } from "@chakra-ui/react";
import LandingSection from "../layout/LandingSection";
import second from "@/assets/second.png";
import Button from "@/components/ui/Button";

export default function Availability() {
  return (
    <LandingSection id="availability" grid>
      <Box mb={8} className="ml-auto space-y-6 xl:max-w-[78%]">
        <Heading
          as="h2"
          className="!font-semibold xl:!text-6xl"
          sx={{
            lineHeight: "1.2 !important",
          }}
        >
          Let your customers know what time is available in a day!
        </Heading>
        <Button>Setup now</Button>
      </Box>
      <Image src={second} alt="" className="-order-1" />
    </LandingSection>
  );
}
