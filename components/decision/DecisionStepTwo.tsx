"use client";

import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CustomButton from "../reusable/CustomButton";
import CustomLink from "../reusable/CustomLink";

type DecisionTwoFormData = {
  insurancePayout: "yes" | "no" | "maybe";
  restorationCost: "yes" | "no" | "maybe";
  propertyAsIs: "yes" | "no" | "maybe";
  personalHelp: string;
};

export default function DecisionTwoForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { setValue, watch, handleSubmit } = useForm<DecisionTwoFormData>({
    defaultValues: {
      insurancePayout: "yes",
      restorationCost: "yes",
      propertyAsIs: "yes",
      personalHelp: "",
    },
  });

  const handleSelect = (name: keyof DecisionTwoFormData, value: string) => {
    setValue(name, value as any);
  };

  const onSubmit = (data: DecisionTwoFormData) => {
    console.log("Decision Two Form Data:", data);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/next-step");
    }, 800);
  };

  return (
    <div className="flex justify-center">
      <div className="md:w-[550px] w-[90vw] max-w-[530px] bg-white rounded-2xl shadow-lg p-6 md:p-9 space-y-4">
        
        {/* Q1 */}
        <div>
          <Label className="text-sm font-semibold text-[#070707]">
            Do you want an instant idea of what your insurance should payout based on your policy?
          </Label>
          <div className="flex gap-2 mt-2 bg-[#FCEADF] rounded-lg p-1">
            {["yes", "no", "maybe"].map(option => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect("insurancePayout", option)}
                className={cn(
                  "flex-1 py-2 text-sm rounded-md font-semibold",
                  watch("insurancePayout") === option ? "bg-white" : "bg-transparent"
                )}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Q2 */}
        <div>
          <Label className="text-sm font-semibold text-[#070707]">
            Do you want an instant idea of what the restoration would cost?
          </Label>
          <div className="flex gap-2 mt-2 bg-[#FCEADF] rounded-lg p-1">
            {["yes", "no", "maybe"].map(option => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect("restorationCost", option)}
                className={cn(
                  "flex-1 py-2 text-sm rounded-md font-semibold",
                  watch("restorationCost") === option ? "bg-white" : "bg-transparent"
                )}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Q3 */}
        <div>
          <Label className="text-sm font-semibold text-[#070707]">
            Do you want an idea of what we would pay for the property as-is?
          </Label>
          <div className="flex gap-2 mt-2 bg-[#FCEADF] rounded-lg p-1">
            {["yes", "no", "maybe"].map(option => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect("propertyAsIs", option)}
                className={cn(
                  "flex-1 py-2 text-sm rounded-md font-semibold",
                  watch("propertyAsIs") === option ? "bg-white" : "bg-transparent"
                )}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Textarea */}
        <div>
          <Label className="text-sm font-semibold text-[#070707]">
            Anything in particular you would like our personal help with?
          </Label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 text-sm mt-2 focus:outline-primaryColor"
            placeholder="Tell us how we can best support you through this process..."
            onChange={(e) => setValue("personalHelp", e.target.value)}
            rows={3}
          />
        </div>

        {/* Submit */}
        <div className='flex  flex-col-reverse md:flex-row gap-3'>
                    <div className='md:w-[35%]'>
                               <CustomLink link="/decision-info/decision-step-one" title='Back' className="" />
                               </div>
        <CustomButton
          title="Get a Recovery Plan Now"
          loading={isSubmitting}
          sendingMsg="Processing..."
          type="submit"
          className="w-full"
          onClick={handleSubmit(onSubmit)}
        />
</div>
      </div>
    </div>
  );
}
