import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center font-roboto justify-between p-5">
      <div className="border border-[#F5F6F7] w-[60%] bg-[#F5F6F7]/80 p-5">
        {/* Header */}
        <div className="flex justify-between items-end">
          <h1 className="text-5xl leading-[50px] font-semibold">CHRISTIAN <br /> CHIEMELA</h1>
          <div className="text-xs font-semibold leading-6 text-right">
            <p>10 Deji Odunuga Street, Anthony Village, Lagos, Nigeria.</p>
            <p>chrisfidel.international@gmail.com</p>
            <p>+2347015362583 | <a className="text-blue-500 underline" href="https://github.com/chris097">https://github.com/chris097</a></p>
          </div>
        </div>
    </div>
    </main>
  );
}
