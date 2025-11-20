"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertCircle, Phone, Building2, ChevronRight, Download } from "lucide-react"
import pase1 from "@/public/icon/pase1.svg"
import pase2 from "@/public/icon/pase2.svg"
import pase3 from "@/public/icon/pase3.svg"
import pase4 from "@/public/icon/pase4.svg"
import exmapleImage from "@/public/icon/example.svg"
import Image from "next/image"
import Link from "next/link"



export function RecoveryPlanAccordion() {
     const phases = [
    {
      id: "phase-1",
      number: pase1,
      title: "Phase 1: Secure your property",
      description: "Secure your property as much as possible",
      details:
        "Sarah's house had a kitchen fire that damaged the back door and several windows. She called a board- up service within 24 hours, which prevented rain damage the next day. This saved her thousands in additional damage.",
      companies: [
        { id: "c1", name: "Rapid Response Team", category: "(555) 345-6789" },
        { id: "c2", name: "SafeGuard Emergency", category: "(555) 234-5678" },
        { id: "c3", name: "Solid Foundation Repair", category: "(555) 123-4567" },
      ],
    },
    {
      id: "phase-2",
      number: pase2,
      title: "Phase 2: Take photos & videos of damage",
      description: "Document all damage thoroughly for insurance",
    },
    {
      id: "phase-3",
      number: pase3,
      title: "Phase 3: Contact insurance to open a claim",
      description: "File your claim with detailed documentation",
    },
    {
      id: "phase-4",
      number: pase4,
      title: "Phase 4: Save temporary living receipts",
      description: "Keep records of all temporary living expenses",
    },
  ]

const overviewInfo = [
  {
    id: 1,
    label: "Potential Insurance Payout",
    actionLabel: "Get Payout Amount",
    timeline: "3–12 Months",
    link: "https://insurance.housefiresolutions.com/"
  },
  {
    id: 2,
    label: "Potential Restoration Cost",
    actionLabel: "Get Rehab Estimate",
    timeline: "6–18 Months",
     link: "https://restoration.housefiresolutions.com/"
  },
  {
    id: 3,
    label: "Home Purchase Program",
    actionLabel: "See You Qualify",
    timeline: "14–30 Days",
     link: "https://www.housefiresolutions.com/cash-offer"
  },
]


  return (
    <div className=" md:p-10  w-full">
      <div className=" space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Your Personalized Recovery Plan</h1>
          <p className="text-sm text-gray-600 mt-1">Follow each step carefully to stay on track and recover faster.</p>
        </div>

      {/* Property Overview Card */}
<div className="bg-white rounded-xl border border-gray-200 md:p-6 p-4 shadow-sm mb-8">
  {/* Title */}
  

  <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
    {/* Left - Property Info */}
    <div className="col-span-3">
        <h2 className="text-[18px] font-semibold text-gray-900 mb-4">
    Property Overview
  </h2>
      <p className="text-[11px] font-semibold uppercase text-gray-500 mb-1">
        Property
      </p>
      <p className="text-[14px] font-medium text-gray-900">
        245 Maple Avenue, Houston, TX 77007
      </p>
    </div>

    {/* Right - Info Items */}
    <div className="col-span-5 grid grid-cols-1 h-full sm:grid-cols-3 gap-4 bg-indigo-50 rounded-lg p-4">

  {overviewInfo.map((item, index) => (
    <Link href={item?.link}
      key={item.id}
      className={`space-y-1 ${index !== 0 ? "border-l h-full flex flex-col justify-between border-gray-200 pl-4" : ""}`}
    >
      <p className="text-base font-semibold text-gray-800">
        {item.label}
      </p>

      <button className="text-base text-start text-orange-600 cursor-pointer
       hover:underline font-medium">
        {item.actionLabel}
      </button>

      <p className="text-[12px] text-gray-500">
        Timeline
      </p>
      <p className="text-[12px] text-black font-semibold">{item.timeline}</p>
    </Link>
  ))}

</div>

  </div>
</div>
        {/* Accordion */}
        <div className="  ">
          <Accordion type="single" collapsible className="w-full ">
            {phases.map((phase) => (
              <AccordionItem key={phase.id} value={phase.id} className="border-[1px] shadow rounded-md mb-2.5 last-of-type:mb-0 bg-white border-gray-100 ">
                <AccordionTrigger className="px-6 py-5 hover:bg-gray-50 transition text-left ">
                  <div className="flex items-start gap-4 w-full">
                    <div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-orange-600">
                    <Image src={phase?.number} alt="phase" width={24} height={24}/>
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-lg  text-gray-900">{phase.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{phase.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="md:px-6 px-3 py-5 bg-gray-50 space-y-5">
                     {phase.details && (
                        <div>

                     
                    <div>
                        <Accordion type="single" collapsible className="w-full bg-transparent  p-Item">
                         <AccordionItem key="exmaple1" value="exmaple1" className="border-b-0 p-0">
                            <AccordionTrigger className="text-[#E4572E] flex gap-3 justify-start items-center text-base font-bold" >
                               Why's This Important?
                                
                            </AccordionTrigger>
                            <AccordionContent>
                                
                    <div className="flex gap-3 text-sm text-gray-700   rounded-lg ">
                      <p>Securing your property prevents further damage from weather, theft, or vandalism. This protects what's salvageable and can reduce your insurance claim complications.</p>
                    </div>
                            </AccordionContent>
                         </AccordionItem>
                    </Accordion>
                    </div>
                    
                 <div> 
                    <Accordion type="single" collapsible className="w-full bg-transparent  blue-Item">
                         <AccordionItem key="exmaple1" value="exmaple1" className="border-b-0">
                            <AccordionTrigger className="text-blueColor flex gap-3 justify-start items-center text-base font-bold" >
                               <Image src={exmapleImage} alt="Example" width={18} height={18}/>
                                Example
                            </AccordionTrigger>
                            <AccordionContent>
                               
                    <div className="flex gap-3 text-sm text-gray-700 bg-blue-100 p-3 rounded-lg ">
                      
                      <p>{phase.details}</p>
                    </div>
                
                            </AccordionContent>
                         </AccordionItem>
                    </Accordion>
                 </div>
                    </div>
                   )}

                  {phase.companies && phase.companies.length > 0 && (
                    <div className="space-y-3">
                      <p className="text-base uppercase font-bold text-blue-900">Recommended Local Companies</p>

                    {phase.companies.map((company) => (
                          <div
                            key={company.id}
                            className="flex items-center justify-between bg-white p-4 rounded-md border border-gray-200"
                          >
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-full bg-blueColor/20">
                              <Phone className="w-5 h-5 text-blueColor" />
                                </div>
                              <div>
                                <p className="font-semibold text-gray-900 text-base">{company.name}</p>
                                <p className="text-sm text-gray-500">{company.category}</p>
                              </div>
                            </div>
                            <Link href={`tel:${company.category}`}  className="px-4 py-2 bg-gradient-to-tl to-blueColor from-blueColor2 text-white text-xs font-medium rounded  transition flex items-center gap-1">
                              <Phone className="w-4 h-4" /> Call
                            </Link>
                          </div>
                        ))}
                    </div>
                  )}

                  <Link href="/resources" className="mt-3 px-3 text-center w-full block py-3 bg-orange-500 text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition">
                    Get Quotes For Me
                  </Link>

                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-col md:flex-row gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-900 text-white rounded-xl hover:bg-blue-950 transition font-medium">
           <Download size={18}/> Download Recovery Plan (PDF)
          </button>

          <Link href={"/final-option"} className="flex-1 flex items-center justify-center gap-2 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition font-medium">
            See My Next Steps <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  )
}
