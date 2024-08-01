import LandingSection from "@/components/layout/LandingSection";
import { CardType } from "@/lib/types";
import { Box, Heading } from "@chakra-ui/react";
import invoice from "@/assets/invoice.svg";
import payment from "@/assets/payment.svg";
import reminders from "@/assets/reminders.svg";
import scheduling from "@/assets/scheduling.svg";
import sms from "@/assets/sms.svg";
import Card from "@/components/ui/Card";

const items: Omit<CardType, "imagePosition">[] = [
  {
    image: scheduling,
    title: "Scheduling",
    text: "Let your clients choose the most efficient time to meet with you and fix their car issues.",
  },
  {
    image: payment,
    title: "Payment gateway",
    text: "An efficient payment system worthy of your services.",
  },
  {
    image: invoice,
    title: "Generalize invoice",
    text: "Get your receipts and invoices for payment proof.",
  },
  {
    image: reminders,
    title: "Send reminders",
    text: "Let's remind you and your clients about the upcoming meetings before time.",
  },
  {
    image: sms,
    title: "Send SMS",
    text: "Stay on the loop with all your business activities with our SMS notifications.",
  },
];

export default function Services() {
  return (
    <LandingSection id="services">
      <Heading
        as="h2"
        fontWeight="regular"
        marginBottom={16}
        textAlign="center"
        letterSpacing={3}
      >
        SERVICES WE OFFER
      </Heading>
      <Box
        as="ul"
        className="space-y-6 lg:flex lg:flex-wrap lg:justify-center lg:gap-10 lg:space-y-0 lg:*:max-w-[22rem] lg:*:[flex-basis:_calc(33%_-_2.5rem)]"
      >
        {items.map((item) => (
          <Card {...item} key={item.text} imagePosition="center" />
        ))}
      </Box>
    </LandingSection>
  );
}
