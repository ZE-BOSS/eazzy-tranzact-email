import {
    Text,
    Section,
    Button,
    Row,
    Column,
    Img,
    Link,
  } from "@react-email/components";
  import Email from "./EmailTemplate";
  import Desktop from "../assets/desktop.png";
  import History from "../assets/history.png";
  
  interface LoginEmailProps {
    userName?: string;
    link?: string;
    ipAddress?: string;
    time?: string;
  }
  
  const LoginEmail = ({ userName = "Uncu Holdings", link, ipAddress, time }: LoginEmailProps) => {
    return (
      <Email preview="Login to Eazzy Tranzact">
        <Section>
            <Text className="text-[#1F2937] text-[24px] font-[600] leading-[33.6px]">
                Login to Eazzy Tranzact
            </Text>
            <Text className="font-[600] mt-[16px] text-[#030712] text-[16px] leading-[28px]">
                Hi, <span className="text-[#2874FC] font-[700] text-[16px]">{userName}</span>,
            </Text>
        </Section>

        <Text className="text-[#384860] mt-1 text-[16px] font-[400] leading-[24px] tracking-[0.2px]">
            You just logged into your EazzyTranzact account successfully. If this was you, there’s nothing for you to do right now.
        </Text>

        <Section>
            <Row>
                <Column>
                    <Img src={Desktop} className="w-[13.64px] h-[10px]"/>
                </Column>
                <Column>
                    <Text className="text-[#121A26] text-[14px] font-[400] leading-[21px] tracking-[0.2px]">
                        IP Address: <span className="text-[#384860] font-[700]">{ipAddress}</span>
                    </Text>
                </Column>
            </Row>
            <Row className="-mt-7">
                <Column>
                    <Img src={History} className="w-[13.64px] h-[10px]"/>
                </Column>
                <Column>
                    <Text className="text-[#121A26] text-[14px] font-[400] leading-[21px] tracking-[0.2px]">
                        Time: <span className="text-[#384860] font-[700]">{time}</span>
                    </Text>
                </Column>
            </Row>
        </Section>

        <Section>
            <Text className="text-[#121A26] text-[18px] font-[500] leading-[25.2px]">
                Not You?
            </Text>

            <Text className="text-[#384860] text-[14px] font-[400] leading-[21px] tracking-[0.2px]">
                Please reset your password immediately to keep your account secure.
            </Text>
        </Section>
        
        <Button 
            className="bg-[#2874FC] text-[#F9FAFB] cursor-pointer px-[3.52rem] py-[0.55rem] rounded-[6px] opacity-100 text-[16px] font-[600] leading-[20px] text-center"
            href={link}
        >
            Reset Password
        </Button>


        <Text className="text-[#384860] text-[14px] font-[500] leading-[21px] tracking-[0.2px]">
            If you recognize this attempt but had trouble logging in, try again or contact our support team at 
            <Link
                href="mailto:eazzytranzact@support.com"
                className="text-blue-600 underline"
            >
               {" "} eazzytranzact@support.com
            </Link>.
        </Text>
      </Email>
    );
  };
  
  export default LoginEmail;