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
    description: "Led complex enterprise software implementations, increasing client satisfaction by 30%.",
  },
  {
    title: "Senior Solution Engineer",
    company: "VTEX Ecommerce Platform Ltd",
    period: "Nov 2020 - Sep 2022",
    description: "Led complex enterprise software implementations, increasing client satisfaction by 30%.",
  },
  {
    title: "Senior Software Engineer",
    company: "Inviqa UK Ltd",
    period: "Oct 2018 - Sep 2020",
    description: "Led complex enterprise software implementations, increasing client satisfaction by 30%.",
  },
  {
    title: "Software Engineer",
    company: "Inviqa UK Ltd",
    period: "Apr 2018 - Oct 2018",
    description: "Led complex enterprise software implementations, increasing client satisfaction by 30%.",
  },
  {
    title: "Software Engineer",
    company: "Alpenite S.r.l.",
    period: "Feb 2016 - Apr 2018",
    description: "Led complex enterprise software implementations, increasing client satisfaction by 30%.",
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

