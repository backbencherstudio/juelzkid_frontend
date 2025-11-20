import ArrowIcon from "@/public/icon/arrow";
import icon from "@/public/icon/building.png";
import ChatQuestionIcon from "@/public/icon/chat-question";
import CustomerSupport from "@/public/icon/customer-support";
import DollerIcon from "@/public/icon/doller";
import HomeIcon from "@/public/icon/home";
import ShieldUserIcon from "@/public/icon/shield-user";
import Image from "next/image";
import Link from "next/link";

const cardFlowItems = [
  {
    id: 1,
    icon: ShieldUserIcon,
    title: "Insurance Payout Estimator",
    description:
      "Estimate your potential insurance payout based on your damage and policy details.",
    buttonText: "See Potential Payout",
     link: "https://insurance.housefiresolutions.com/"
  },
  {
    id: 2,
    icon: ChatQuestionIcon,
    title: "Restore Vs Selling Quiz",
    description:
      "Answer quick questions to see whether restoring or selling is the better fit for you.",
    buttonText: "Take Quick Quiz",
    link: "https://restoration.housefiresolutions.com/"
  },
  {
    id: 3,
    icon: DollerIcon,
    title: "Restoration Cost Estimator",
    description:
      "Get an estimated cost to restore or rebuild your home using typical market rates.",
    buttonText: "See Potential Cost",
    link: "https://www.housefiresolutions.com/cash-offer"
  },
  {
    id: 4,
    icon: HomeIcon,
    title: "Home Purchase Program",
    description:
      "Request a no-obligation cash offer to sell your fire-damaged home as-is.",
    buttonText: "See If I Qualify",
    link: "https://www.housefiresolutions.com/cash-offer"
  },
];

const FinalOption = () => {
  return (
    <div className="flex flex-col w-full text-center mb-5 items-center justify-center">
      <div className="flex items-center justify-center p-3 bg-gradient-to-t to-[#FF7C33]/20  from-transparent rounded-full">
        <Image
          src={icon}
          alt="icon"
          width={55}
          height={55}
          className="w-10 h-10 rounded-full bg-white border-1 border-[#FF7C33] p-2 flex items-center justify-center"
        />
      </div>

      <div>
        <h1 className="text-[#0D0D12] text-[28px] leading-[130%] font-extrabold">
          Get Educated On The Finances
        </h1>
        <p className="text-[16px] text-[#666D80] leading-[150%] tracking-[ 0.32px]">
          Having an idea of what insurance would pay out, what restoration would
          cost and what we would pay for the house as is, will help you make the
          best decision for you and your family
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 lg:gap-0 my-6">
        {cardFlowItems.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className="flex flex-col lg:flex-row items-center gap-4"
            >
              {/* Card */}
              <div className="flex-1 min-w-0 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#F1F5F9] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[#0F172A] leading-[140%] text-[20px] font-bold text-nowrap">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-center mt-3 leading-[162.5%] text-[#475569] mb-4">
                  {card.description}
                </p>

                {/* Button */}
                <button className="w-full text-[#FFF] font-semibold py-2 px-4 leading-[150%] tracking-[0.32px] text-[16px] rounded-[14px] bg-[linear-gradient(180deg,#FF5B00_0%,#FF7C33_100%)] cursor-pointer">
                  {card.buttonText}
                </button>
              </div>

              {/* Arrow - Only show on desktop and not after last card */}
              {index < cardFlowItems.length - 1 && (
                <div className="hidden lg:flex items-center justify-center mx-2">
                  <div>
                    <ArrowIcon className="w-8 h-8" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div>
        <h6 className="text-[16px] leading-[150%] tracking-[0.32px] text-[#000] font-normal">
          Not sure which option is right for you?
        </h6>
        <div className="mt-4">
          <Link href="https://www.housefiresolutions.com/live-chat" className="flex items-center justify-center space-x-2 bg-[#FFF] border border-[#F0F0F0] rounded-[14px] px-[18px] py-2 cursor-pointer w-full">
            <CustomerSupport />
            <span className="font-semibold text-[16px] leading-[150%] tracking-[0.32px] text-[#FF5B00] text-center">
              Ask A Question
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinalOption;
