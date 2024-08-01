import LandingSection from "@/components/layout/LandingSection";
import Button from "@/components/ui/Button";
import FooterLinks from "@/components/ui/FooterLinks";
import { Box, Heading, Input } from "@chakra-ui/react";

const all = [
  {
    title: "Company",
    links: ["About Us", "Partners & Affiliates"],
  },
  {
    title: "Products",
    links: ["How it Works", "Features", "Pricing"],
  },
  {
    title: "Support",
    links: ["Contact us", "FAQs", "Privacy", "Terms"],
  },
];

const socials = [
  {
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005V3.00005Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    label: "twitter",
  },
  {
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    label: "facebook",
  },
  {
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 11.3701C16.1234 12.2023 15.9813 13.0523 15.5938 13.7991C15.2063 14.5459 14.5931 15.1515 13.8416 15.5297C13.0901 15.908 12.2384 16.0397 11.4078 15.906C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1903 8.22773 13.4229 8.09406 12.5923C7.9604 11.7616 8.09206 10.91 8.47032 10.1584C8.84858 9.40691 9.45418 8.7938 10.201 8.4063C10.9478 8.0188 11.7978 7.87665 12.63 8.00006C13.4789 8.12594 14.2648 8.52152 14.8717 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.3701Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.5 6.5H17.51"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    label: "instagram",
  },
  {
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 9H2V21H6V9Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    label: "linkedin",
  },
];

export default function Footer() {
  return (
    <LandingSection
      id="footer"
      as="footer"
      className="pb-12 md:-mt-6 md:pb-10"
      outerClass="!min-h-max"
    >
      <Box className="lg:grid lg:grid-cols-2">
        <Box className="lg:mb-16">
          <Heading
            className="!font-semibold xl:max-w-[60%] xl:!text-6xl"
            sx={{
              lineHeight: "1.1 !important",
            }}
            fontSize="xx-large"
            mb={6}
          >
            Subscribe to our newsletter!
          </Heading>
          <Box className="glass border-primary-200 flex !rounded-pill border-2 lg:max-w-[78%]">
            <Input
              placeholder="Email address"
              bg="transparent"
              border={0}
              sx={{
                paddingBlock: "1.5em !important",
              }}
              className="!rounded-pill !border-transparent !outline-transparent placeholder:font-medium placeholder:text-neutral-100"
            />
            <Button className="min-w-max">Sign up</Button>
          </Box>
        </Box>
        <Box className="my-4 grid grid-cols-2 gap-2 md:mb-12 md:mt-8 md:grid-cols-3 lg:my-0 lg:ml-auto lg:w-max lg:gap-12">
          {all.map((item) => (
            <FooterLinks {...item} key={item.title} />
          ))}
        </Box>
      </Box>
      <Box className="md:flex-starter grid place-content-center place-items-center md:items-center">
        <ul className="mb-2 flex items-center gap-4 md:mb-0">
          {socials.map((social) => (
            <li key={social.label}>
              <button
                aria-label={social.label}
                className="trans-all hover:brightness-75 focus-visible:brightness-75 active:scale-95"
              >
                {social.svg}
              </button>
            </li>
          ))}
        </ul>
        <p>&copy; 2022. FixBot Technologies Limited. All Rights Reserved.</p>
      </Box>
    </LandingSection>
  );
}
