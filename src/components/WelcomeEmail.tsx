import { Text, Section, Button } from "@react-email/components";
import Email from "./EmailTemplate";

interface WelcomeEmailProps {
  userName?: string;
  link?: string;
}

const WelcomeEmail = ({
  userName = "Uncu Holdings",
  link,
}: WelcomeEmailProps) => {
  return (
    <Email preview="Welcome to Eazzy Tranzact">
      <Section>
        <Text className="font-[600] mt-[1.25rem] text-[#030712] text-base">
          Hi,{" "}
          <span className="text-[#2874FC] font-[700] text-[16px]">
            {userName}
          </span>
          ,
        </Text>
        <Text className="text-[#1F2937] text-[24px] font-[600] leading-[21px]">
          Welcome to Eazzy Tranzact{" "}
          <span className="text-[24px] font-[600] leading-[21px]">🎉!</span>
        </Text>
      </Section>

      <Text className="text-[#384860] text-[16px] font-[400] leading-[21px]">
        We're excited to have you on board.With our platform, you
        <br />
        can send and receive money across borders quickly,
        <br />
        securely,and at the best exchange rates.
      </Text>

      <Section>
        <Text className="text-[#1F2937] text-[16px] font-[600] leading-[21px]">
          Here's how to get started:
        </Text>

        <ul className="list-disc pl-8">
          <li className="text-[#384860] text-[14px] font-[400] leading-[21px]">
            Complete Your Profile - Add your details for a seamless experience.
          </li>
          <li className="text-[#384860] text-[14px] font-[400] leading-[21px]">
            Secure Your Account - Ensure secure transactions with two-factor
            authentication.
          </li>
          <li className="text-[#384860] text-[14px] font-[400] leading-[21px]">
            Fund Your Wallet - Add money to your account and start.
          </li>
        </ul>
      </Section>

      <div className="flex gap-2 items-center flex-wrap">
        <Text className="text-[#384860] text-[14px] font-normal leading-[21px]">
          🚀 Ready to make your first transfer?
        </Text>

        <div>
          <Button
            className="bg-[#2874FC] text-white cursor-pointer px-[2.52rem] py-[0.55rem] rounded-md opacity-100 text-[16px] font-[600] leading-[20px] text-center"
            href={link}
          >
            Start Now
          </Button>
        </div>
      </div>

      <Text className="text-[#384860] text-[14px] font-[400] leading-[21px]">
        If you have any questions, our support team is always here to help.
      </Text>

      <Text className="list-none text-[#384860] text-[14px] font-[400] leading-[20px]">
        Happy tranzacting! <br /> Bayo <br /> Eazzy tranzact.
      </Text>
    </Email>
  );
};

export default WelcomeEmail;
