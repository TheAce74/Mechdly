import LandingSection from "@/components/layout/LandingSection";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import first from "@/assets/first.png";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <LandingSection
      id="hero"
      className="md:grid md:grid-cols-2 md:content-between md:items-center md:gap-6"
    >
      <Box mb={8} className="space-y-4 xl:max-w-[78%]">
        <Heading
          as="h1"
          className="!font-semibold xl:!text-6xl"
          sx={{
            lineHeight: "1.2 !important",
          }}
        >
          Schedule, Make Payments, & Send invoice to your customers.
        </Heading>
        <Text fontSize="large" className="!mb-6 xl:!text-2xl">
          Efficiently and professionally run your business and with your clients
          eliminating the complaints of your customers so you can go back to
          work.
        </Text>
        <Button>Get started now</Button>
      </Box>
      <Image src={first} alt="" />
    </LandingSection>
  );
}