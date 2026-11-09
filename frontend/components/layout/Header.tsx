import { Menu, LogIn, Search } from "lucide-react";
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-white  px-[15px] flex justify-between items-center text-black pb-[10px] pt-[10px]">
      <div className="flex flex-1 items-center  justify-start text-sm">
        <div className="border-[1px] rounded-lg flex flex-row items-center justify-center p-[5px]    w-[28px] h-[28px]">
          <Menu></Menu>
        </div>
        <Link
          href="/about-us"
          className="text-md ml-[15px] hover:underline text-gray-800 "
        >
          О нас
        </Link>
        <Link href="/all-countries" className="ml-[7px] hover:underline">
          Все страны
        </Link>
      </div>

      <Link className="font-black text-sky-600 text-xl" href="/">
        LightTravel
      </Link>
      <div className="flex flex-1 items-center justify-end">
        <Search className="mr-[10px] w-[18px] h-[18px]"></Search>
        <Link
          href="/login"
          className="flex border-[1px] text-white font-bold bg-gray-900 rounded-xl p-[7px] px-[15px] flex items-center text-sm flex-row"
        >
          <p className="mr-[5px]">Войти</p>
          <LogIn className=" w-[18px] h-[18px]"></LogIn>
        </Link>
      </div>
    </header>
  );
}
