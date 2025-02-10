import {
    Text,
    Section,
    Button
  } from "@react-email/components";
  import Email from "./EmailTemplate";
  
  interface KYCConfirmationEmailProps {
    userName?: string;
    link?: string;
  }
  
  const KYCConfirmationEmail = ({ userName = "Uncu Holdings", link }: KYCConfirmationEmailProps) => {
    return (
      <Email preview="Login to Eazzy Tranzact">
        <Section>
            <Text className="text-[#1F2937] text-[20px] font-[600] leading-[28px]">
                KYC Confirmation
            </Text>
            <Text className="font-[600] mt-[16px] text-[#030712] text-[16px] leading-[28px]">
                Hi, <span className="text-[#2874FC] font-[700] text-[16px]">{userName}</span>,
            </Text>
        </Section>

        <Text className="text-[#384860] text-[16px] font-[400] leading-[24px] tracking-[0.2px]">
            Thank you for submitting your KYC verification documents  Your details are currently being reviewed by our  compliance team. We’ll Notify You Once your documents are approved or if any corrections are needed.
        </Text>

        <Text className="text-[#384860] text-[16px] font-[400] leading-[24px] tracking-[0.2px]">
            You can check your KYC status anytime in your dashboard:
        </Text>
        
        <Button 
            className="bg-[#2874FC] text-[#F9FAFB] cursor-pointer px-[1.52rem] py-[0.75rem] rounded-[6px] opacity-100 text-[16px] font-[600] leading-[20px] text-center"
            href={link}
        >
            View Your Dashboard
        </Button>

        <Text className="text-[#384860] text-[16px] font-[400] leading-[24px] tracking-[0.2px]">
            If you have any questions, feel free to reach out to our support team.
        </Text>

        <Text className="list-none text-[#384860] text-[16px] font-[400] leading-[20px]">
            Happy tranzacting! <br /> Bayo <br /> Eazzy tranzact.
        </Text>
      </Email>
    );
  };
  
  export default KYCConfirmationEmail;