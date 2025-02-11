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
  // Column,
  // Row,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import Logo from "../assets/Eazzytranzact-Logo.png";
import Phone from "../assets/phone-1.png";

interface EmailProps {
  preview: string;
  children: React.ReactNode;
}

const Email = ({ preview, children }: EmailProps) => {
  return (
    <Html>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
                    @media screen and (max-width: 640px) {
                        .content {
                            width: 90% !important;
                            margin: 2rem auto !important;
                            padding: 1rem !important;
                        }
                        .phone-image {
                            display: none !important;
                        }
                    }
                `}
        </style>
      </Head>
      <Preview>{preview}</Preview>
      <Tailwind>
        <Body className="font-[Outfit] m-0 p-0">
          <Container className="bg-[#FAFAFA] w-full max-w-[640px] py-6">
            <div className="px-[48px]">
              <Img
                src={Logo}
                alt="Eazzy Tranzact Logo"
                className="w-28 h-auto mb-3"
              />
            </div>

            <Hr className="max-w-[36.06rem] border-[#2874FC] border-t-[0.01875rem]" />

            <div className="content bg-white mt-6 max-w-[29.56rem] mx-auto p-6 rounded-lg shadow-sm">
              {children}
            </div>
          </Container>
          <Container className="bg-[#FAFAFA] my-[25px] max-w-[40rem] w-full h-[191px]">
            <div className="h-full w-full flex items-center relative">
              <div className="max-w-[399px] px-6">
                <Text className="text-[12px] font-[200] leading-18px] tracking-[0.2px] text-left">
                  <strong>Questions or FAQ?</strong> Contact us at{" "}
                  <Link
                    href="mailto:eazzytranzact@support.com"
                    className="text-blue-600 underline font-semibold"
                  >
                    eazzytranzact@support.com
                  </Link>{" "}
                  <br />
                  <span className="font-[200]">
                    371h floor, 1 Canada square, Canary Wharf London, England,
                    E15 SAA
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
              </div>
              <div className="h-[100%] absolute right-0 phone-image">
                <Img src={Phone} className=" top-0" />
              </div>
            </div>
          </Container>
          <Container className=" text-[#FFFFFF] items-center bg-[#1F2937] max-w-[40rem] w-full">
            <div className="flex flex-col items-center justify-center p-4">
              <p className="m-0 text-xs font-normal leading-6 text-center font-[var(--fontfamilyFont1)]">
                © 2025 Eazzy Tranzact
              </p>
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;
