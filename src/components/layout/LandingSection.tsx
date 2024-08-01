import { cn } from "@/lib/utils";
import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type LandingSectionProps = PropsWithChildren & {
  id: string;
  outerClass?: string;
  className?: string;
};

export default function LandingSection({
  children,
  id,
  className,
  outerClass,
}: LandingSectionProps) {
  return (
    <Box
      as="section"
      minHeight="50dvh"
      id={id}
      className={cn(
        "bg-opacity-10 backdrop-blur-sm backdrop-filter",
        outerClass,
      )}
    >
      <Box
        className={cn("px-3 py-4 md:px-6 md:py-8 lg:px-16 lg:py-10", className)}
      >
        {children}
      </Box>
    </Box>
  );
}
