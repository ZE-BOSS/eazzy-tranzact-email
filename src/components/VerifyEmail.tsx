import {
    Text,
    Section,
    Button,
  } from "@react-email/components";
  import Email from "./EmailTemplate";
  
  interface VerifyEmailProps {
    userName?: string;
    link?: string;
  }
  
  const VerifyEmail = ({ userName = "Uncu Holdings", link }: VerifyEmailProps) => {
    return (
      <Email preview="Welcome to Eazzy Tranzact">
        <Section>
            <Text className="text-[#1F2937] text-[20px] font-[600] leading-[28px]">
                Verification Successful
            </Text>
            <Text className="font-[600] mt-[1.25rem] text-[#030712] text-[16px] leading-[28px]">
                Hi, <span className="text-[#2874FC] font-[700] text-[16px]">{userName}</span>,
            </Text>
        </Section>

        <Text className="text-[#384860] text-[16px] font-[400] leading-[24px]">
            Great news! Your KYC verification has been successfully approved 🎉
        </Text>

        <Section>
            <Text className="text-[#1F2937] text-[16px] font-[600] leading-[24px] tracking-[0.2px]">
                ✅ What This Means for You:
            </Text>

            <ul className="list-disc pl-8">
                <li className="text-[#384860] text-[14px] font-[400] leading-[21px]">
                    You now have full access to all features, including secure cross-border transactions.
                </li>
                <li className="text-[#384860] text-[14px] font-[400] leading-[21px]">
                    You can send, receive, and manage your funds without restrictions.
                </li>
                <li className="text-[#384860] text-[14px] font-[400] leading-[21px]">
                    Enjoy fast and seamless money transfers with the best exchange rates.
                </li>
            </ul>
        </Section>
        <Text className="text-[#384860] text-[16px] font-[400] leading-[21px]">
            You can check your status anytime in your dashboard:
        </Text> <br />

        <Button 
            className="bg-[#2874FC] text-white -mt-4 cursor-pointer px-[2.52rem] py-[0.55rem] rounded-[6px] text-[16px] font-[600] leading-[20px] text-center"
            href={link}
        >
            View Your Dashboard
        </Button>

        <Text className="list-none text-[#384860] text-[14px] font-[400] leading-[20px]">
            Happy tranzacting! <br /> Bayo <br /> Eazzy tranzact.
        </Text>
      </Email>
    );
  };
  
  export default VerifyEmail;