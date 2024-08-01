import { Box, Heading } from "@chakra-ui/react";

type FooterLinksProps = {
  title: string;
  links: string[];
};

export default function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <Box>
      <Heading as="h3" fontWeight="semibold" fontSize="x-large" mb={2}>
        {title}
      </Heading>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <button className="trans-all hover:text-primary-400 focus-visible:text-primary-400 active:scale-95 lg:text-lg">
              {link}
            </button>
          </li>
        ))}
      </ul>
    </Box>
  );
}
