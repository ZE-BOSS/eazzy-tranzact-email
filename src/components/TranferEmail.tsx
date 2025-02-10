import {
    Text,
    Section,
    Button,
} from "@react-email/components";
import Email from "./EmailTemplate";
  
interface TranferEmailProps {
    userName?: string;
    link?: string;
    balance?: string;
    data?: {
        amount: string;
        beneficiary: string;
        iban: string;
        date: string;
        transaction_id: string;
    }
}

const TranferEmail = ({ userName = "Uncu Holdings", link, data }: TranferEmailProps) => {
    return (
      <Email preview="Welcome to Eazzy Tranzact">
        <Section>
            <Text className="font-[600] mt-[1.25rem] text-[#030712] text-[16px] leading-[28px]">
                Hi, <span className="text-[#2874FC] font-[700] text-[16px]">{userName}</span>,
            </Text>
        </Section>

        <Text className="text-[#384860] text-[16px] font-[400] leading-[24px]">
            Your transfer of <span className="text-[#2874FC] text-[18px] font-[600] leading-[27px]">{data?.amount}</span> to <span className="text-[#384860] text-[16px] font-[600] leading-[24px]">{data?.beneficiary}</span> has been successfully processed! Details of your Transfer is shown below:
        </Text>

        <Section className={"w-[351px] h-[290px] rounded-[10px] border-[3px] border-[#FAFAFA] bg-[#FAFAFA]"}>
            <Text className="text-[#384860] pl-[13px] text-[16px] font-[400] leading-[21px]">
                Transfer
            </Text>
            <div className="flex justify-between h-[40px] w-[348px] items-center px-[24px] bg-[#E7ECF180] my-[20px]">
                <p className="text-[#A3A6B8] text-[14px] font-[400] leading-[21px] tracking-[0.2px]">Amount:</p>
                <p className="text-[#384860] text-[16px] font-[500] leading-[24px] tracking-[0.2px]">{data?.amount}</p>
            </div>
            <div className="flex justify-between h-[40px] w-[348px] items-center px-[24px] bg-[#E7ECF180] my-[20px]">
                <p className="text-[#A3A6B8] text-[14px] font-[400] leading-[21px] tracking-[0.2px]">IBAN:</p>
                <p className="text-[#384860] text-[16px] font-[500] leading-[24px] tracking-[0.2px]">{data?.iban}</p>
            </div> 
            <div className="flex justify-between h-[40px] w-[348px] items-center px-[24px] bg-[#E7ECF180] my-[20px]">
                <p className="text-[#A3A6B8] text-[14px] font-[400] leading-[21px] tracking-[0.2px]">Beneficiary:</p>
                <p className="text-[#384860] text-[16px] font-[500] leading-[24px] tracking-[0.2px]">{data?.beneficiary}</p>
            </div> 
            <div className="flex justify-between h-[40px] w-[348px] items-center px-[24px] bg-[#E7ECF180] my-[20px]">
                <p className="text-[#A3A6B8] text-[14px] font-[400] leading-[21px] tracking-[0.2px]">Date:</p>
                <p className="text-[#384860] text-[16px] font-[500] leading-[24px] tracking-[0.2px]">{data?.date}</p>
            </div> 
            <div className="flex justify-between h-[40px] w-[348px] items-center px-[24px] bg-[#E7ECF180] my-[20px]">
                <p className="text-[#A3A6B8] text-[14px] font-[400] leading-[21px] tracking-[0.2px]">Transaction ID:</p>
                <p className="text-[#384860] text-[16px] font-[500] leading-[24px] tracking-[0.2px]">{data?.transaction_id}</p>
            </div> 
        </Section>
        <Text className="text-[#1F2937] text-[16px] font-[400] leading-[21px] tracking-[0.2px]">
            Your Beneficiary should receive the funds shortly. You can track this transaction in your dashboard:
        </Text>

        <Button 
            className="bg-[#2874FC] text-white -mt-1 cursor-pointer px-[2.52rem] py-[0.55rem] rounded-[6px] text-[16px] font-[600] leading-[20px] text-center"
            href={link}
        >
            View Transaction
        </Button>

        <Text className="text-[#1F2937] text-[16px] font-[400] leading-[21px] tracking-[0.2px]">
            If you didn’t authorize this transaction or need help, contact our support team.
        </Text>
      </Email>
    );
  };
  
  export default TranferEmail;