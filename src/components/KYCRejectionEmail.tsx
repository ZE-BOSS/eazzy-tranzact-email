import {
    Text,
    Section,
    Button
  } from "@react-email/components";
  import Email from "./EmailTemplate";
  
  interface KYCRejectionEmailProps {
    userName?: string;
    link?: string;
  }
  
  const KYCRejectionEmail = ({ userName = "Uncu Holdings", link }: KYCRejectionEmailProps) => {
    return (
      <Email preview="Login to Eazzy Tranzact">
        <Section>
            <Text className="text-[#1F2937] text-[20px] font-[600] leading-[28px]">
                KYC Rejection
            </Text>
            <Text className="font-[600] mt-[16px] text-[#030712] text-[16px] leading-[28px]">
                Hi, <span className="text-[#2874FC] font-[700] text-[16px]">{userName}</span>,
            </Text>
        </Section>

        <Text className="text-[#384860] text-[16px] font-[400] leading-[24px] tracking-[0.2px]">
            We reviewed your KYC submission, and unfortunately, it was not approved due to the following reasons:
        </Text>

        <ul className="list-disc pl-8 -mt-2">
            <li className="text-[#384860] text-[16px] font-[400] leading-[21px]">
                Blurry ID,
            </li>
            <li className="text-[#384860] text-[16px] font-[400] leading-[21px]">
                Mismatched Information,
            </li>
            <li className="text-[#384860] text-[16px] font-[400] leading-[21px]">
                Expired Document
            </li>
        </ul>

        <Text className="text-[#384860] text-[16px] font-[400] leading-[24px] tracking-[0.2px]">
            We will need you to resubmit Your Documents – Ensure they are clear, valid, and match your registered details.
            You can Check Our KYC Guidelines For a smooth process. 
        </Text>

        <Text className="text-[#384860] text-[16px] font-[400] leading-[24px] tracking-[0.2px]">
            To retry your verification, visit your dashboard:
        </Text>
        
        <Button 
            className="bg-[#2874FC] text-[#F9FAFB] cursor-pointer px-[1.52rem] py-[0.75rem] rounded-[6px] opacity-100 text-[16px] font-[600] leading-[20px] text-center"
            href={link}
        >
            View Your Dashboard
        </Button>

        <Text className="text-[#384860] text-[16px] font-[400] leading-[24px] tracking-[0.2px]">
            We look forward to activating your account soon!
        </Text>
      </Email>
    );
  };
  
  export default KYCRejectionEmail;