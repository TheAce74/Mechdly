import { CardType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

type CardProps = CardType;

export default function Card({ image, imagePosition, text, title }: CardProps) {
  return (
    <Box
      as="li"
      className="glass rounded-lg border-2 border-primary-100 p-6 lg:p-10"
    >
      <Image
        src={image}
        alt=""
        className={cn(
          "aspect-square w-10 lg:mb-5 lg:w-14",
          imagePosition === "center" ? "lg:mx-auto" : "lg:ml-auto",
        )}
      />
      <Heading as="h3" fontSize="x-large" mt={2} mb={1}>
        {title}
      </Heading>
      <Text fontSize="large">{text}</Text>
    </Box>
  );
}
