import { Menu, LogIn, Search } from "lucide-react";
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-white  px-[15px] flex justify-between items-center text-black pb-[10px] pt-[10px]">
      <div className="flex flex-1 items-center font-semibold justify-start text-sm">
        <div className="border-[1px] hover:border-gray-900 hover:bg-gray-900 hover:text-white duration-300 transition-all cursor-pointer rounded-lg flex flex-row items-center justify-center p-[5px]    w-[30px] h-[30px]">
          <Menu></Menu>
        </div>
        <Link
          href="/about-us"
          className="text-md ml-[15px] hover:underline text-gray-800 "
        >
          О нас
        </Link>
        <Link href="/all-countries" className="ml-[10px] hover:underline">
          Все страны
        </Link>
      </div>

      <Link
        className="font-black text-sky-600 hover:text-blue-300 duration-300 transform-all text-xl"
        href="/"
      >
        LightTravel
      </Link>
      <div className="flex flex-1 items-center justify-end">
        <Search className="mr-[15px] cursor-pointer w-[18px] h-[18px]"></Search>
        <Link
          href="/login"
          className="flex border-[1px] hover:bg-white border-gray-900 transition-all duration-300 hover:text-gray-900 text-white font-bold bg-gray-900 rounded-xl p-[7px] px-[15px] flex items-center text-sm flex-row"
        >
          <p className="mr-[5px]">Войти</p>
          <LogIn className=" w-[18px] h-[18px]"></LogIn>
        </Link>
      </div>
    </header>
  );
}
