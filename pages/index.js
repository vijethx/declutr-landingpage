import Head from "next/head";
import Image from "next/image";
import Logo from "../public/Logo2.png";

export default function Home() {
  return (
    <div className='bg-[#1D1134] text-white min-h-screen flex flex-col items-center justify-center'>
      <Head>
        <title>Declutr</title>
        <meta
          name='description'
          content='Supercharge all your bookmarks with Declutr'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <nav className=''>
        {/* <Image src={"/Logo.png"} alt='logo' height='34px' width='117px' /> */}
      </nav>

      <main className='flex flex-col justify-center items-center'>
        <div className='flex items-center justify-center'>
          <Image src={Logo} alt='logo' className='max-w-full h-auto' />
          <h2 className='font-[Nunito]   text-[22px] ml-[8px] text-center'>
            Declutr
          </h2>
        </div>
        <h1 className='font-[Sora] xl:text-[70px] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-center mt-8'>
          Consume the internet better.
        </h1>
        <button className='text-[#1D1134] font-[Sora] text-[14px] lg:text-[16px] bg-[#ED8F03] hover:bg-[#FCAA30] rounded-lg px-6 py-3 mt-8 '>
          Follow on Twitter for updates
        </button>
      </main>

      <footer className=''></footer>
    </div>
  );
}
