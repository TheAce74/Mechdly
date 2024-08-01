import LandingSection from "@/components/layout/LandingSection";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import first from "@/assets/first.png";
import Button from "@/components/ui/Button";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <LandingSection
      id="hero"
      grid
      outerClass="bg-fade-circle-right bg-no-repeat"
    >
      <Box mb={12} className="space-y-4 xl:max-w-[78%]">
        <Heading
          as="h1"
          className="!font-semibold xl:!text-6xl"
          sx={{
            lineHeight: "1.1 !important",
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
      <Image
        src={first}
        alt=""
        ref={ref}
        style={{
          transform: isInView ? "none" : "scale(0)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      />
    </LandingSection>
  );
}
