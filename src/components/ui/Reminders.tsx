import { Box, Heading, Image } from "@chakra-ui/react";
import LandingSection from "../layout/LandingSection";
import third from "@/assets/third.png";
import Button from "@/components/ui/Button";

export default function Reminders() {
  return (
    <LandingSection id="reminders" grid>
      <Box mb={12} className="space-y-6 xl:max-w-[78%]">
        <Heading
          as="h2"
          className="!font-semibold xl:!text-6xl"
          sx={{
            lineHeight: "1.2 !important",
          }}
        >
          Send reminders, SMS and invoices to customers.
        </Heading>
        <Button>Setup now</Button>
      </Box>
      <Image src={third} alt="" />
    </LandingSection>
  );
}
