import {
    Html,
    Head,
    Body,
    Container,
    Text,
    Img,
    Link,
    Hr,
    Preview,
    Column,
    Row,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import Logo from "../assets/Eazzytranzact-Logo.png";
import Phone from "../assets/web-phone.png";
  
interface EmailProps {
    preview: string;
    children: React.ReactNode;
}

const Email = ({ preview, children }: EmailProps) => {
    return (
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
        </Head> 
        <Preview>{preview}</Preview>
        <Tailwind>
          <Body className="font-[Outfit]">
            <Container className="relative bg-[#FAFAFA] max-w-[40rem] w-[40rem] py-[24px] h-[45.13rem] ">
                <Img src={Logo} className="absolute w-[6.81rem] h-[2.17rem] top-[1.5rem] left-[3rem] px-[0.023rem] "/>
                <Hr className="absolute w-[36.06rem] border-[#2874FC] h-0 top-[4.5rem] left-[1.94rem] gap-0 border-t-[0.01875rem]" />
                <Container className="bg-[#FFFFFF] max-w-[29.56rem] w-[29.56rem] mt-[5rem] ml-[5.19rem] px-[1.57rem] py-[1.5rem] gap-[1.5rem] rounded-b-[0.75rem] opacity-100">
                    {children}
                </Container>
            </Container>
            <Container className="bg-[#FAFAFA] my-[25px] w-[40rem] max-w-[40rem] h-[191px]">
                <Row className="h-[100%] w-[100%]">
                    <Column className="w-[399px] pl-[34px] gap-[24px]">
                        <Text className="text-[12px] font-[200] leading-18px] tracking-[0.2px] text-left">
                            <strong>Questions or FAQ?</strong> Contact us at{" "}
                            <Link
                                href="mailto:eazzytranzact@support.com"
                                className="text-blue-600 underline font-semibold"
                            >
                                eazzytranzact@support.com
                            </Link> <br />
                            <span className="font-[200]">
                                371h floor, 1 Canada square, Canary Wharf London, England, E15 SAA
                            </span>
                        </Text>
                        <p className="flex flex-row text-[0.625rem] font-normal leading-[var(--itemspacing24)] decoration-solid">
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
                    </Column>
                    <Column className="h-[100%] relative overflow-hidden">
                        <Img src={Phone} className="object-contain absolute top-[18px] left-[4px]" style={{ transform: "rotate(17.76deg)" }}/>
                    </Column>
                </Row>
            </Container>
            <Container className="flex flex-col justify-center text-[#FFFFFF] items-center bg-[#1F2937] max-w-[40rem] w-[40rem] h-[4.875rem] ">
                <Text className="font-[var(--fontfamilyFont1)] text-[0.75rem] font-normal leading-[var(--itemspacing24)] text-center">
                    2025 Eazzy Tranzact
                </Text>
                <Text className="font-[var(--fontfamilyFont1)] text-[0.625rem] font-normal leading-[1.0625rem] text-center">
                    Eazzy Tranzact UK is registerer in England with company number 14133153 
                </Text>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };
  
  export default Email;