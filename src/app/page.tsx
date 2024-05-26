"use client";
import Project from "@/components/Project";
import { education, experiences, projects } from "@/data";
import { useRef } from "react";
import jsPDF from 'jspdf';
import html2canvas from "html2canvas";

export default function Home() {
  const componentRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (componentRef.current) {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const canvas = await html2canvas(componentRef.current, {
        scale: 2,
        useCORS: true,
      });

      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      // Add first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add more pages if necessary
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('CHRISTIAN_CHIEMELA_CV.pdf');
    }
  };

  return (
    <main className="flex min-h-screen font-roboto justify-center flex-col p-5">
      <div ref={componentRef} className="border border-[#FFF] w-[60%] mx-auto bg-[#fff] p-5">
        {/* Header */}
        <div className="flex justify-between items-end border-b-4 border-black/50 pb-5">
          <h1 className="text-5xl leading-[50px] font-semibold">
            CHRISTIAN <br /> CHIEMELA
          </h1>
          <div className="text-xs font-semibold leading-6 text-right">
            <p>10 Deji Odunuga Street, Anthony Village, Lagos, Nigeria.</p>
            <p>chrisfidel.international@gmail.com</p>
            <p>+2347015362583 | <a className="text-blue-500 underline" href="https://github.com/chris097">https://github.com/chris097</a></p>
          </div>
        </div>
        {/* Intro */}
        <p className="text-sm font-medium border-b-4 border-black/50 py-4 tracking-tight">
          I am a dedicated Software Developer specializing in crafting top-tier applications and staying updated with industry advancements. Skilled in project leadership, requirements analysis, architectural design, and web/mobile development. Expertise in object-oriented programming with a strong focus on delivering high-quality software solutions.
        </p>
        {/* Experience */}
        <div className="pt-4">
          <h1 className="text-xl font-semibold leading-4 tracking-[.1%] text-[#4C4949]">EXPERIENCE</h1>
          <div className="border-black/50 pb-5">
            <Project data={experiences} />
          </div>
        </div>
        {/* Projects */}
        <div className="">
          <h1 className="text-xl font-semibold leading-4 tracking-[.1%] text-[#4C4949]">PROJECTS</h1>
          <div className="pb-5">
            <Project data={projects} isProject />
          </div>
        </div>
        {/* Education */}
        <div className="">
          <h1 className="text-xl font-semibold leading-4 tracking-[.1%] text-[#4C4949]">EDUCATION</h1>
          <div className="border-b-4 border-black/50 pt-3 pb-5">
            <ul className="list-disc pl-3.5">
              {education?.map((edu, index) => (
                <li key={index} className="text-sm tracking-normal leading-4 text-left mt-2">{edu}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Skills */}
        <div className="py-4">
          <h1 className="text-xl font-semibold leading-4 tracking-[.1%] text-[#4C4949]">SKILLS</h1>
          <div className="border-b-4 border-black/50 pt-5 pb-3">
            <div className="flex gap-3 mb-2 items-center">
              <h2 className="font-semibold whitespace-nowrap text-sm">Frontend Technologies: </h2>
              <p className="text-sm tracking-normal leading-4">HTML5, CSS3, JavaScript, React.js, Next.js, Typescript, TailwindCSS, ChakraUI, Styles-Component.</p>
            </div>
            <div className="flex gap-3 mb-2 items-center">
              <h2 className="font-semibold whitespace-nowrap text-sm">Mobile Technologies: </h2>
              <p className="text-sm tracking-normal leading-4">React-Native</p>
            </div>
            <div className="flex gap-3 mb-2 items-center">
              <h2 className="font-semibold whitespace-nowrap text-sm">Backend Technologies: </h2>
              <p className="text-sm tracking-normal leading-4">Node.js, Express.js</p>
            </div>
            <div className="flex gap-3 mb-2 items-center">
              <h2 className="font-semibold whitespace-nowrap text-sm">Database: </h2>
              <p className="text-sm tracking-normal leading-4">MongoDB</p>
            </div>
            <div className="flex gap-3 mb-2 items-center">
              <h2 className="font-semibold whitespace-nowrap text-sm">Testing & QA: </h2>
              <p className="text-sm tracking-normal leading-4">Jest, React-Testing-Library</p>
            </div>
            <div className="flex gap-3 mb-2 items-center">
              <h2 className="font-semibold whitespace-nowrap text-sm">Version Control: </h2>
              <p className="text-sm tracking-normal leading-4">Git, GitHub, Bitbucket</p>
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={handleDownload} className="mt-5 bg-blue-500 text-white p-2 rounded">Download PDF</button> */}
    </main>
  );
}
