import { cn } from "@/lib/utils";
import { As, Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type LandingSectionProps = PropsWithChildren & {
  id: string;
  outerClass?: string;
  className?: string;
  grid?: boolean;
  as?: As;
};

export default function LandingSection({
  children,
  id,
  className,
  outerClass,
  grid,
  as,
}: LandingSectionProps) {
  return (
    <Box
      as={as ? as : "section"}
      minHeight="50dvh"
      id={id}
      className={cn(
        "bg-opacity-10 backdrop-blur-lg backdrop-filter",
        outerClass,
      )}
    >
      <Box
        className={cn(
          "px-3 py-6 md:px-6 md:py-8 lg:px-16 lg:py-10",
          grid && "md:grid md:grid-cols-2 md:items-center md:gap-6",
          className,
        )}
      >
        {children}
      </Box>
    </Box>
  );
}
