import emeka from "@/assets/emeka.png";
import LandingSection from "@/components/layout/LandingSection";
import Card from "@/components/ui/Card";
import { CardType } from "@/lib/types";
import { Heading } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

const items: Omit<CardType, "imagePosition">[] = [
  {
    image: emeka,
    title: "Emeka and Sons",
    text: "A great platform for my business. Was not getting enought time for my customers until I was introduced to mechdly.",
  },
  {
    image: emeka,
    title: "Sam Automobile",
    text: "Everything is organized now, clients are happy and I am happy. Superb platform!",
  },
  {
    image: emeka,
    title: "Chima's Fixes",
    text: "Happy I took the advice, this is the level of professionality my clients want to see. Goes hand in hand with my skills. Love it!",
  },
];

export default function Testimonials() {
  return (
    <LandingSection id="testimonials">
      <Heading
        as="h2"
        fontWeight="regular"
        marginBottom={16}
        textAlign="center"
        letterSpacing={3}
        maxWidth="32rem"
        mx="auto"
      >
        WHAT OTHER MECHANICS SAY ABOUT THE EXPERIENCE
      </Heading>
      <Marquee autoFill pauseOnHover speed={40}>
        <ul className="flex">
          {items.map((item) => (
            <Card
              {...item}
              key={item.text}
              imagePosition="right"
              className="mr-8 max-w-[24rem]"
            />
          ))}
        </ul>
      </Marquee>
    </LandingSection>
  );
}
