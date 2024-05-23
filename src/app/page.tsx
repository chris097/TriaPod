import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center font-roboto justify-between p-5">
      <div className="border border-[#FFF] w-[60%] bg-[#fff] p-5">
        {/* Header */}
        <div className="flex justify-between items-end border-b-4 border-black/50 pb-5">
          <h1 className="text-5xl leading-[50px] font-semibold">CHRISTIAN <br /> CHIEMELA</h1>
          <div className="text-xs font-semibold leading-6 text-right">
            <p>10 Deji Odunuga Street, Anthony Village, Lagos, Nigeria.</p>
            <p>chrisfidel.international@gmail.com</p>
            <p>+2347015362583 | <a className="text-blue-500 underline" href="https://github.com/chris097">https://github.com/chris097</a></p>
          </div>
        </div>
        {/* intro */}
        <p className="text-sm font-medium border-b-4 border-black/50 py-4 tracking-tight">I am a dedicated Software Developer specializing in crafting top-tier applications and staying updated with industry advancements. Skilled in project leadership, requirements analysis, architectural design, and web/mobile development. Expertise in object-oriented programming with a strong focus on delivering high-quality software solutions.</p>
        {/* Experience */}
        <div className="py-4">
          <h1 className="text-xl font-semibold leading-4 tracking-[.1%] text-[#4C4949]">EXPERIENCE</h1>
          <div className="border-b-4 border-black/50 py-5">
            <h2 className="text-[15px] font-extrabold tracking-normal leading-[17px]">SOFTWARE DEVELOPER</h2>
            <p className="text-xs font-semibold leading-3 tracking-normal mt-2 mb-3">Taxaide Limited | Lagos, Nigeria JAN 2024 – TILL DATE</p>
            {/* <li className="text-sm tracking-normal leading-4 text-start my-2">Collaborate with a team of developers, product manager’s and designers to build the OredoPay application, a taxpayer platform for Oredo Local Government in Nigeria.</li>
            <li className="text-sm tracking-normal leading-4 text-start my-2">Collaborate with a team of developers, product manager’s and designers to build the OredoPay application, a taxpayer platform for Oredo Local Government in Nigeria.</li> */}
             <ul className="list-disc pl-3.5">
      <li className="text-sm tracking-normal leading-4 text-left mt-2">
        Collaborate with a team of developers, product managers, and designers to build the OredoPay application, a taxpayer platform for Oredo Local Government in Nigeria.
      </li>
      <li className="text-sm tracking-normal leading-4 text-left mt-2">
        Collaborate with a team of developers, product managers, and designers to build the OredoPay application, a taxpayer platform for Oredo Local Government in Nigeria.
      </li>
      {/* Add more list items as needed */}
    </ul>
          </div>
        </div>
    </div>
    </main>
  );
}
