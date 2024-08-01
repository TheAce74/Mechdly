import { Box, Heading, Image } from "@chakra-ui/react";
import LandingSection from "../layout/LandingSection";
import third from "@/assets/third.png";
import Button from "@/components/ui/Button";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Reminders() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <LandingSection
      id="reminders"
      grid
      outerClass="bg-fade-circle-right bg-no-repeat"
    >
      <Box
        mb={12}
        className="space-y-6 xl:max-w-[78%]"
        ref={ref}
        style={{
          transform: isInView ? "none" : "scale(0)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <Heading
          as="h2"
          className="!font-semibold xl:!text-6xl"
          sx={{
            lineHeight: "1.1 !important",
          }}
        >
          Send reminders, SMS and invoices to customers.
        </Heading>
        <Button>Setup now</Button>
      </Box>
      <Image
        src={third}
        alt=""
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      />
    </LandingSection>
  );
}
