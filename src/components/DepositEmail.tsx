import {
    Text,
    Section,
    Button,
} from "@react-email/components";
import Email from "./EmailTemplate";
  
interface DepositEmailProps {
    userName?: string;
    link?: string;
    balance?: string;
    data?: {
        amount: string;
        payment_method: string;
        date: string;
        transaction_id: string;
    }
}

const DepositEmail = ({ userName = "Uncu Holdings", link, balance, data }: DepositEmailProps) => {
    return (
      <Email preview="Welcome to Eazzy Tranzact">
        <Section>
            <Text className="font-[600] mt-[1.25rem] text-[#030712] text-[16px] leading-[28px]">
                Hi, <span className="text-[#2874FC] font-[700] text-[16px]">{userName}</span>,
            </Text>
        </Section>

        <Text className="text-[#384860] text-[16px] font-[400] leading-[24px]">
            Your top up of <span className="text-[#2874FC] text-[18px] font-[600] leading-[27px]">{data?.amount}</span> to your wallet was successful! 
            Details about your deposit is shown below:
        </Text>

        <Section className={"w-[351px] h-[290px] rounded-[10px] border-[3px] border-[#FAFAFA] bg-[#FAFAFA]"}>
            <Text className="text-[#384860] pl-[13px] text-[16px] font-[400] leading-[21px]">
                Deposit
            </Text>
            <div className="flex justify-between h-[40px] w-[348px] items-center px-[24px] bg-[#E7ECF180] my-[20px]">
                <p className="text-[#A3A6B8] text-[14px] font-[400] leading-[21px] tracking-[0.2px]">Amount:</p>
                <p className="text-[#384860] text-[16px] font-[500] leading-[24px] tracking-[0.2px]">{data?.amount}</p>
            </div>
            <div className="flex justify-between h-[40px] w-[348px] items-center px-[24px] bg-[#E7ECF180] my-[20px]">
                <p className="text-[#A3A6B8] text-[14px] font-[400] leading-[21px] tracking-[0.2px]">Payment Method:</p>
                <p className="text-[#384860] text-[16px] font-[500] leading-[24px] tracking-[0.2px]">{data?.payment_method}</p>
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
            Your updated USD balance is now <span className="font-[500]">{balance}</span>. You can start transacting right away!
        </Text> <br />

        <Button 
            className="bg-[#2874FC] text-white -mt-3 cursor-pointer px-[2.52rem] py-[0.55rem] rounded-[6px] text-[16px] font-[600] leading-[20px] text-center"
            href={link}
        >
            View Your Wallet
        </Button>

        <Text className="text-[#1F2937] text-[16px] font-[400] leading-[21px] tracking-[0.2px]">
            If you didn’t authorize this transaction or need help, contact our support team.
        </Text>
      </Email>
    );
  };
  
  export default DepositEmail;