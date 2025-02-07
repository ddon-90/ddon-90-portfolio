import {
  Card,
  CardContent,
  CardDescription,
  CardHeader, CardTitle
} from "@/components/ui/card";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const experiences = [
  {
    title: "Principal Solution Engineer",
    company: "VTEX Ecommerce Platform Ltd",
    period: "Sept 2022 - Present",
    description: "As a Principal Solution Engineer, I led the design and implementation of tailored technology solutions to meet client requirements. I collaborated with clients to understand their business challenges, developed proof-of-concept solutions, and delivered in-depth technical presentations. Acting as a subject matter expert, I guided technical discussions, addressed client queries during the pre-sales phase, and contributed to RFPs and solution architecture documents. Within the team, I provided leadership by mentoring junior engineers, fostering knowledge sharing, and driving best practices to enhance solution delivery. I also worked cross-functionally with sales, engineering, and customer success teams to ensure alignment between technical deliverables and business objectives.",
  },
  {
    title: "Senior Solution Engineer",
    company: "VTEX Ecommerce Platform Ltd",
    period: "Nov 2020 - Sep 2022",
    description: "As a Senior Solution Engineer, I designed and implemented tailored technology solutions to meet client requirements. I collaborated with clients to understand their business challenges, developed proof-of-concept solutions, and delivered in-depth technical presentations. Acting as a subject matter expert, I participated in technical discussions, addressed client queries during the pre-sales phase, and contributed to RFPs and solution architecture documents.",
  },
  {
    title: "Senior Software Engineer",
    company: "Inviqa UK Ltd",
    period: "Oct 2018 - Sep 2020",
    description: "As a Senior Software Engineer, I led the implementation of web solutions, including CMS and eCommerce platforms, ensuring high-quality and scalable architectures. I assisted the Project Manager in workload planning and estimations, contributing to efficient project execution. I participated in pre-sales engagements, requirements analysis, and design meetings, documenting both technical and functional specifications. Additionally, I ran the Salesforce B2C Commerce Community of Practice initiative within the company, fostering knowledge sharing and best practices. Working in a KANBAN environment using JIRA Software, I collaborated closely with Product Owners and stakeholders to align technical solutions with business objectives. I also engaged with clients on-site, both nationally and internationally, to support project delivery and strengthen relationships.",
  },
  {
    title: "Software Engineer",
    company: "Inviqa UK Ltd",
    period: "Apr 2018 - Oct 2018",
    description: "As a Software Engineer, I contributed to the implementation of web solutions, including CMS and eCommerce platforms, ensuring efficient and scalable development. I supported the Project Manager by assisting with workload planning and estimations. I participated in requirements analysis, and design meetings, helping to document technical and functional specifications. Additionally, I worked in a KANBAN environment using JIRA Software and collaborated closely with Product Owners and stakeholders to align development efforts with business objectives. I also had the opportunity to engage with clients on-site, both nationally and internationally, to support project delivery.",
  },
  {
    title: "Software Engineer",
    company: "Alpenite S.r.l.",
    period: "Feb 2016 - Apr 2018",
    description: "As a Software Engineer, I implemented eCommerce solutions using Salesforce B2C Commerce, ensuring high-quality and scalable development.",
  },
];

export default function Experiences() {
  return (
    <main className="min-h-screen bg-zinc-100 dark:bg-zinc-900 p-4 sm:p-8">
      <Navbar />

      <div className="max-w-4xl mx-auto my-12">
        <h1 className="text-3xl font-bold mb-8 text-center dark:text-white">Work Experiences</h1>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription>
                  {exp.company} | {exp.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}

