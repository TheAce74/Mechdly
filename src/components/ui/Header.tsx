import { Box, Image } from "@chakra-ui/react";
import logo from "@/assets/logo.svg";
import Button from "@/components/ui/Button";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { useClickAway } from "use-click-away-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { clickAwayRef } = useClickAway(() => setOpen(false));

  return (
    <Box
      as="header"
      bg="neutral.900"
      className="flex-starter sticky top-0 isolate z-50 py-2 pl-3 pr-1 sm:px-3 sm:py-4 md:px-6 lg:px-8"
      ref={clickAwayRef}
    >
      <Image src={logo} alt="logo" w={[100, 130]} />
      <div className="sm:hidden">
        <Hamburger toggled={open} toggle={setOpen} size={24} />
      </div>
      <Box
        className={cn(
          "trans-all invisible absolute right-0 top-0 -z-10 grid place-content-center place-items-center gap-4 rounded-md p-3 opacity-0",
          open && "visible top-full opacity-100",
          "sm:visible sm:static sm:flex sm:items-center sm:gap-6 sm:p-0 sm:opacity-100",
        )}
        bg="neutral.900"
      >
        <Button variant="secondary">Log in</Button>
        <Button>Get started</Button>
      </Box>
    </Box>
  );
}
