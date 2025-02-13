/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Building2, HeartPulse, LandPlot, Network, ShieldCheck, Store } from "lucide-react"
import { Card,CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

const industries = [
  {
    id: "financial",
    label: "Financial Institutions",
    icon: Building2,
    title: "Strengthening Regulatory Compliance & Data Protection",
    description:
      "Given the high risk and regulatory demands, financial institutions must prioritize securing organizational and customer information.",
    measures:
      "Monitor password strength, password change frequency, unsafe password storage, and Data Loss Prevention (DLP) events.",
    tools: "Password management solutions, DLP systems.",
    training: "Secure handling of financial data, compliance with PCI DSS, GDPR, and APRA CPS 234.",
    image: "/a_professional_financial_analyst_in_a_modern_office_reviewing_cybersecurity_reports_on_a_laptop_whi_srz97821gj0xf5wjfj0e_1.png",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: HeartPulse,
    title: "Protecting Sensitive Patient Data",
    description:
      "With the critical nature of patient records, the healthcare sector requires robust security measures and employee engagement strategies.",
    measures: "Track data wiping, deconstruction activities, and DLP events caused by employee errors.",
    tools: "Employee feedback mechanisms, security champion programs.",
    training: "HIPAA compliance, data privacy, secure use of medical devices & electronic health records.",
    image: "/a_doctor_and_a_cybersecurity_expert_in_a_hospital_reviewing_patient_records_on_a_secure_digital_tab_kam53sxpnenyins2w3br_3.png",
  },
  {
    id: "technology",
    label: "Technology Companies",
    icon: Network,
    title: "Preventing Intellectual Property Theft",
    description:
      "Tech companies are prime targets for cyber threats, making phishing awareness and employee engagement crucial.",
    measures: "Monitor phishing click rates, re-click rates, report rates, and employee training completion.",
    tools: "Phishing simulation platforms, employee feedback systems, security information-sharing tools.",
    training:
      "Recognizing sophisticated phishing attempts, secure coding practices, and reporting suspicious activity.",
    image: "/a_team_of_cybersecurity_professionals_in_a_high-tech_office_analyzing_phishing_threats_and_firewall_yh3r5950434c6u3r604i_3.png",
  },
  {
    id: "government",
    label: "Government & Public Sector",
    icon: LandPlot,
    title: "Ensuring National & Organizational Security",
    description:
      "Government entities handle critical infrastructure and classified data, requiring a holistic security approach.",
    measures:
      "Assess phishing awareness, employee engagement, and adherence to physical and device security protocols.",
    tools: "Regular phishing simulations, training completion tracking, employee feedback collection.",
    training:
      "Phishing awareness, data protection, compliance with government regulations, and physical security best practices.",
    image: "/a_government_cybersecurity_officer_in_a_control_room_monitoring_a_large_digital_screen_displaying_n_4flxmcpc8npu4z2on88g_2.png",
  },
  {
    id: "retail",
    label: "Retail & E-Commerce",
    icon: Store,
    title: "Safeguarding Customer Information",
    description:
      "With high volumes of transactions, retailers must prioritize securing customer data and employee security awareness.",
    measures: "Track password security, frequency of password changes, and DLP events.",
    tools: "Password management tools, DLP systems, employee feedback platforms.",
    training: "PCI DSS compliance, safe handling of customer data, and social engineering awareness.",
    image: "/a_retail_store_manager_and_an_it_security_expert_discussing_cybersecurity_measures_at_a_checkout_co_mpw2hf0u4amnzc1vcd29_0.png",
  },
]

type StepBlockRectangleProps = {
  stepBlockRectangleContent: any;
};

const StepBlockRectangle: React.FC<StepBlockRectangleProps> = ({
  stepBlockRectangleContent,
}) => {
  // console.log("stepBlockRectangleContent:", stepBlockRectangleContent);

  const backgroundColor = stepBlockRectangleContent.backGroundColor
    ? stepBlockRectangleContent.backGroundColor.value
    : "#ffffff";

  const heading = stepBlockRectangleContent.heading;

  const headingStyleColor = stepBlockRectangleContent.headingTextColor
    ? stepBlockRectangleContent.headingTextColor.value
    : "#000000";

  const description = stepBlockRectangleContent.description;

  const descriptionTextColor = stepBlockRectangleContent.descriptionTextColor
    ? stepBlockRectangleContent.descriptionTextColor.value
    : "#647084";

  const rectangleBoxes = stepBlockRectangleContent.rectangleBox;

  const blockDescriptionTextColor =
    stepBlockRectangleContent.blockDescriptionTextColor
      ? stepBlockRectangleContent.blockDescriptionTextColor.value
      : "#647084";

  const indexTextColor = stepBlockRectangleContent.indexTextColor
    ? stepBlockRectangleContent.indexTextColor.value
    : "#ffffff";

  const blockBackGroundColor = stepBlockRectangleContent.blockBackGroundColor
    ? stepBlockRectangleContent.blockBackGroundColor.hex
    : "#f2f2f7";

  const iconBackGroundColor = stepBlockRectangleContent.iconBackGroundColor
    ? stepBlockRectangleContent.iconBackGroundColor.hex
    : "#276ef1";

    return (
    <section className="w-full bg-[#faf4c7] py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="mb-12 text-center sm:mb-16 md:mb-20">
          <h2 className="inline-block text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl" data-aos="fade-up">
            <span className="bg-[#304E5A] px-6 py-2 text-white">Our Consultation for Different Sectors</span>
          </h2>
          <p className="mt-4 text-lg text-primary-600 sm:mt-6 md:text-xl">
            At Crest Services, we provide tailored security consultation for each industrys unique challenges,
            addressing compliance, data protection, and employee engagement.
          </p>
        </div>

        <Tabs defaultValue="financial" className="w-full">
          <div className="mb-4 overflow-x-auto">
            <TabsList className="inline-flex h-auto w-full justify-start gap-2 bg-transparent p-0 md:flex-wrap">
              {industries.map((industry) => (
                <TabsTrigger
                  key={industry.id}
                  value={industry.id}
                  className="inline-flex min-w-[200px] items-center gap-2 rounded-lg border bg-white px-4 py-3 text-sm font-medium text-[#304E5A] transition-colors duration-200 hover:bg-[#5BA4B5] hover:text-white data-[state=active]:border-[#304E5A] data-[state=active]:bg-[#304E5A] data-[state=active]:text-white"
                >
                  <industry.icon className="h-5 w-5" />
                  {industry.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {industries.map((industry) => (
            <TabsContent key={industry.id} value={industry.id} className="mt-0 animate-fadeIn">
              <Card className="border-2 border-[#304E5A] bg-white shadow-lg">
                <CardContent className="grid gap-6 p-6 md:grid-cols-2 md:gap-8 lg:p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="flex items-center gap-2 text-2xl font-semibold text-[#304E5A] sm:text-3xl">
                        <ShieldCheck className="h-6 w-6 text-[#5BA4B5] sm:h-8 sm:w-8" />
                        {industry.title}
                      </h3>
                      <p className="mt-2 text-[#377083] sm:text-lg">{industry.description}</p>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h4 className="font-medium text-[#304E5A] sm:text-lg">Specific Measures</h4>
                        <p className="text-[#377083]">{industry.measures}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#304E5A] sm:text-lg">Tools</h4>
                        <p className="text-[#377083]">{industry.tools}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#304E5A] sm:text-lg">Training Focus</h4>
                        <p className="text-[#377083]">{industry.training}</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative hidden aspect-[4/3] overflow-hidden rounded-lg md:block">
                    <img
                      src={industry.image || "/placeholder.svg"}
                      alt={`${industry.label} security consultation illustration`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
    );
};

export default StepBlockRectangle;
