import {
    Html,
    Head,
    Body,
    Container,
    Text,
    Section,
    Img,
    Link,
    Hr,
    Preview,
    Font,
    Button,
  } from "@react-email/components";
  import { Tailwind } from "@react-email/tailwind";
  import Logo from "../assets/Eazzytranzact-Logo.png";
  import Phone from "../assets/web-phone.png";
  
  interface WelcomeEmailProps {
    userName?: string;
    link?: string;
  }
  
  const WelcomeEmail = ({ userName = "Uncu Holdings", link }: WelcomeEmailProps) => {
    return (
      <Html>
        <Head>
          <Font
            fontFamily="Roboto"
            fallbackFontFamily="Helvetica"
            webFont={{
              url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head> 
        <Preview>Welcome to Eazzy Tranzact</Preview>
        <Tailwind>
          <Body>
            <Container className="relative bg-[#FAFAFA] w-[40rem] h-[45.13rem] gap-0 opacity-100">
                <Img src={Logo} className="absolute w-[6.81rem] h-[2.17rem] top-[1.5rem] left-[3rem] px-[0.023rem] gap-0 opacity-100"/>
                <Hr className="absolute w-[36.06rem] border-[#2874FC] h-0 top-[4.5rem] left-[1.94rem] gap-0 border-t-[0.01875rem] opacity-100" />
                <Container className="bg-[#FFFFFF] w-[29.56rem] h-[37.12rem] mt-[6rem] ml-[5.19rem] p-[1.5rem] gap-[1.5rem] rounded-b-[0.75rem] opacity-100">
                    <Section>
                        <Text className="font-[Font 1] font-[600] text-[#030712] text-[16px]">
                            Hi, <span className="text-[#2874FC] font-[700] text-[16px]">{userName}</span>,
                        </Text>
                        <Text className="font-outfit text-[#1F2937] text-[1.5rem] font-semibold leading-[1.31rem] text-left">
                            Welcome to Eazzy Tranzact <span className="font-outfit text-[1.5rem] font-normal leading-[1.31rem] text-left">🎉!</span>
                        </Text>
                    </Section>
    
                    <Text className="font-outfit text-[#384860] text-base font-normal leading-[1.3125rem] text-left">
                        We're excited to have you on board.With our platform, you<br />
                        can send and receive money across borders quickly,<br />
                        securely,and at the best exchange rates.
                    </Text>

                    <Section>
                        <Text className="font-outfit text-[#1F2937] text-base font-semibold leading-[1.3125rem] text-left">
                            Here's how to get started:
                        </Text>

                        <ul className="list-disc pl-4">
                            <li className="font-outfit text-[#384860] text-[0.875rem] font-normal leading-[1.3125rem] text-left">
                                Complete Your Profile - Add your details for a seamless experience.
                            </li>
                            <li className="font-outfit text-[#384860] text-[0.875rem] font-normal leading-[1.3125rem] text-left">
                                Secure Your Account - Ensure secure transactions with two-factor authentication.
                            </li>
                            <li className="font-outfit text-[#384860] text-[0.875rem] font-normal leading-[1.3125rem] text-left">
                                Fund Your Wallet - Add money to your account and start.
                            </li>
                        </ul>
                    </Section>

                    <Section className="relative">
                        <Text className="font-outfit text-[#384860] text-[0.875rem] font-normal leading-[1.3125rem] text-left">
                            🚀 Ready to make your first transfer?
                        </Text>

                        <Button 
                            className="absolute bg-[#2874FC] text-white top-[0.5rem] cursor-pointer left-[15.31rem] px-[2.52rem] py-[0.55rem] rounded-md opacity-100 font-outfit text-[1rem] font-semibold leading-[1.25rem] text-center"
                            href={link}
                        >
                            Start Now
                        </Button>
                    </Section>

    
                    <Text className="font-outfit text-[#384860] text-base font-normal leading-[1.3125rem] text-left">
                        If you have any questions, our support team is always here to help.
                    </Text>
    
                    <Text className="font-outfit list-none text-[#384860] text-base font-normal leading-[1.3125rem] text-left">
                        Happy tranzacting! <br /> Bayo <br /> Eazzy tranzact.
                    </Text>
                </Container>
            </Container>
            <Container className="relative bg-[#FFFFFF] w-[40rem] h-[11.9375rem] gap-0 opacity-100 overflow-hidden">
                <Section className="w-[24.9375rem] h-[2.4375rem] absolute top-[4.5625rem] left-[2.3125rem] gap-[1.5rem] opacity-100">
                    <Text className="font-outfit text-[0.75rem] font-light leading-[1.125rem] tracking-[0.0125rem] text-left">
                        <strong>Questions or fag?</strong> Contact us at{" "}
                        <Link
                            href="mailto:eazzytranzact@support.com"
                            className="text-blue-600 underline"
                        >
                            eazzytranzact@support.com
                        </Link> <br />
                        <span className="font-[200]">
                            371h floor, 1 Canada square, Canary Wharf London, England, E15 SAA
                        </span>
                    </Text>
                    <p className="flex flex-row font-[var(--fontfamilyFont1)] text-[0.625rem] font-normal leading-[var(--itemspacing24)] text-left decoration-solid">
                        <span className="pr-2 list-none">
                            <Link href="#" className="text-[#9CA3AF] underline">
                                Privacy
                            </Link>
                        </span>
                        <span>•</span>
                        <span className="px-2">
                            <Link href="#" className="text-[#9CA3AF] underline">
                                Account
                            </Link>
                        </span>
                        <span>•</span>
                        <span className="pl-2">
                            <Link href="#" className="text-[#9CA3AF] underline">
                                Unsubscribe
                            </Link>
                        </span>
                    </p>
                </Section>
                <Section className="w-[24.9375rem] h-[2.4375rem] absolute top-[2.5625rem] left-[3.3125rem] gap-[1.5rem] opacity-100">
                    <Img src={Phone} className="w-[8.529rem] h-[6.578rem] absolute left-[22.673rem] gap-0 opacity-100 rotate-[-17.76]"/>
                </Section>
            </Container>
            <Container className="relative bg-[#1F2937] w-[40rem] h-[4.875rem] gap-0 opacity-100">
                <Text className="w-[9.875rem] h-[1.5rem] absolute top-[0.3125rem] left-[15.0625rem] gap-0 opacity-100 font-[var(--fontfamilyFont1)] text-[#FFFFFF] text-[0.75rem] font-normal leading-[var(--itemspacing24)] text-left">
                    2025 Eazzy Tranzact
                </Text>
                <Text className="text-[#FFFFFF] w-[22.375rem] h-[1.0625rem] absolute top-[1.6875rem] left-[6.9375rem] gap-0 opacity-100 font-[var(--fontfamilyFont1)] text-[0.625rem] font-normal leading-[1.0625rem] text-center">
                    Eazzy Tranzact UK is registerer in England with company number 14133153 
                </Text>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };
  
  export default WelcomeEmail;