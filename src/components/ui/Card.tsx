import { CardType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

type CardProps = CardType & {
  className?: string;
};

export default function Card({
  image,
  imagePosition,
  text,
  title,
  className,
}: CardProps) {
  return (
    <Box
      as="li"
      className={cn(
        "glass border-primary-200 rounded-lg border-2 p-6 lg:p-10",
        className,
      )}
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
