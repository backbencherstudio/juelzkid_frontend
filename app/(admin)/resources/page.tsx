"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CustomerSupport from "@/public/icon/customer-support";
import { Check, Play } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  image?: string;
  videoTitle?: string;
  videoDuration?: string;
}

interface ChecklistItem {
  id: string;
  title: string;
}

interface ChecklistCategory {
  id: string;
  name: string;
  items: ChecklistItem[];
}

const checklistCategories: ChecklistCategory[] = [
  {
    id: "essentials",
    name: "Fire Recovery Checklist",
    items: [
      { id: "1", title: "Essential Items To Replace After a House Fire" },
      { id: "2", title: "House Fire Emergency Expense Tracker" },
      { id: "3", title: "Documents To Replace After a House Fire" },
    ],
  },
  {
    id: "expenses",
    name: "Fire Insurance Claim Checklist",
    items: [
      { id: "1", title: "Home Inventory Worksheet for Fire Insurance Claims" },
      {
        id: "2",
        title: "Questions to Ask Your Insurance Adjuster After a Fire",
      },
      {
        id: "3",
        title: "List of Common Insurance Claim Mistakes After a Fire",
      },
      {
        id: "3",
        title: "List of Common Insurance Claim Mistakes After a Fire",
      },
    ],
  },
  {
    id: "documents",
    name: "Mental Health & Emotional Recovery Checklist",
    items: [
      { id: "1", title: "Mental Wellness Tips for Fire Survivors" },
      { id: "2", title: "Steps to Manage Stress and Anxiety After a Fire" },
    ],
  },
];

const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "What should I do immediately after a house fire?",
    answer:
      "Ensure safety, contact your insurance provider, and document damage with photos. Do not enter the property until it has been cleared as safe by authorities.",
    image: "/background.png",
    videoTitle: "Filing Your First Claim",
    videoDuration: "8:45",
  },
  {
    id: "2",
    question: "How long does recovery usually take?",
    answer:
      "Recovery timelines vary based on the extent of damage. Minor damages may take weeks, while extensive damage can take several months. Your insurance adjuster can provide a more accurate timeline.",
    image: "/background.png",
    videoTitle: "Filing Your First Claim",
    videoDuration: "8:45",
  },
  {
    id: "3",
    question: "Can I get financial assistance?",
    answer:
      "Yes, various financial assistance programs are available. Your insurance claim is the primary source, and you may also qualify for government assistance programs depending on your location and circumstances.",
    image: "/background.png",
    videoTitle: "Filing Your First Claim",
    videoDuration: "8:45",
  },
  {
    id: "4",
    question: "How long does recovery usually take?",
    answer:
      "Yes, various financial assistance programs are available. Your insurance claim is the primary source, and you may also qualify for government assistance programs depending on your location and circumstances.",
    image: "/background.png",
    videoTitle: "Filing Your First Claim",
    videoDuration: "8:45",
  },
];

function page() {
  const [expandedId, setExpandedId] = useState<string>("1");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? "" : id);
  };

  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleCheckItem = (itemId: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(itemId)) {
      newChecked.delete(itemId);
    } else {
      newChecked.add(itemId);
    }
    setCheckedItems(newChecked);
  };

  return (
    <div className="w-full">
      <h1 className="text-[28px] text-[#0D0D12] leading-[130%] font-extrabold">
        Resources & Checklist
      </h1>
      <p className="text-[16px] text-[#666D80] leading-[150%]">
        Learn from experts, explore helpful FAQs, and use AI-powered tools to
        make your recovery smoother.
      </p>
      <section className="mt-5 grid grid-cols-2 gap-x-3">
        <div className="p-8 bg-[#FFF] border border-[#E6E6E6] rounded-[14px]">
          <div className="flex items-center justify-between">
            <h3 className="text-xl text-[#0F172A] leading-[140%] font-bold">
              Frequently Asked Questions
            </h3>
            <p className="flex items-center space-x-2 bg-[#FFF] border border-[#F0F0F0] rounded-[14px] px-[18px] py-2">
              <CustomerSupport />
              <span className="font-semibold text-[16px] leading-[150%] tracking-[0.32px] text-[#FF5B00]">
                Ask A Question
              </span>
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-[16px] text-[#0F172A] leading-[150%] font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  {/* Text Answer */}
                  <p className="text-[#475569] leading-[162.5%] mb-4 text-[16px] font-normal">
                    {item.answer}
                  </p>

                  {/* Video/Image Section */}
                  {item.image && (
                    <div className="mt-6">
                      <div className="relative rounded-lg overflow-hidden bg-black aspect-video flex items-center justify-center group cursor-pointer">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.videoTitle || "FAQ visual"}
                          className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                        />
                        {item.videoTitle && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                              <Play className="w-7 h-7 text-black fill-black ml-1" />
                            </div>
                          </div>
                        )}
                      </div>
                      {item.videoTitle && (
                        <div className="mt-3">
                          <p className="font-medium text-sm leading-[142.857%] text-[#0F172A]">
                            {item.videoTitle}
                          </p>
                          <p className="text-[12px] text-[#64748B] leading-[133.333%] font-normal">
                            {item.videoDuration}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="p-6 bg-[#FFF] border border-[#E6E6E6] rounded-[14px]">
          <div className="space-y-8">
            {checklistCategories.map((category) => (
              <div key={category.id}>
                <h2 className="text-[18px] leading-[155.556%] text-[#0F172A] font-bold mb-3">
                  {category.name}
                </h2>

                <div className="space-y-3">
                  {category.items.map((item) => {
                    const itemKey = `${category.id}-${item.id}`;
                    const isChecked = checkedItems.has(itemKey);

                    return (
                      <label
                        key={itemKey}
                        className="flex items-center gap-3 px-[14px] py-3 rounded-[16px] border-[2px] border-[#E2E8F0] cursor-pointer group"
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            isChecked
                              ? "bg-[#FFF] border-[#FF5B00]"
                              : "border-[#D9D9D9]"
                          }`}
                        >
                          {isChecked && (
                            <Check className="w-3.5 h-3.5 text-[#FF5B00]" />
                          )}
                        </div>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleCheckItem(itemKey)}
                          className="hidden"
                        />
                        <span
                          className={`text-[#0F172A] text-sm leading-[142.857%] font-semibold ${
                            isChecked
                              ? "line-through text-[#475569]"
                              : "text-[#0F172A]"
                          }`}
                        >
                          {item.title}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
            <button className="text-[#FFF] leading-[150%] tracking-[0.32px] text-[16px] font-semibold px-4 py-3 bg-[linear-gradient(180deg,#FF5B00_0%,#FF7C33_100%)] rounded-[16px] w-full cursor-pointer">
              See All Checklists
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
