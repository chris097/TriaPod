import React from 'react';
import Resume from './(page)/Resume';

export default function Home() {
  return (
    <main className='h-screen p-6'>
      <Resume />
      {/* <div className='bg-[#F9F9F9] border border-black/10 rounded-[40px] h-full p-5 items-center flex justify-center flex-col px-36'>
        <h1 className='text-[36px] text-center text-[#000] font-bold font-montserrat'>Craft Your Professional Journey Build Your CV with Ease</h1>
        <p className='text-xl text-center font-semibold font-montserrat text-[#212121]'>Empower Your Career Path with a Customized CV,  Effortlessly Showcase <br /> Your Skills and Experience.</p>
        <div className='border w-full border-dashed border-[#A70606] rounded-[50px] h-[450px] mt-10 p-10'>
          <div className='bg-[#A70606] h-full rounded-[50px]'></div>
        </div>
      </div> */}
    </main>
  );
}
