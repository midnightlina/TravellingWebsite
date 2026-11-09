import { Menu, LogIn, Search } from "lucide-react";
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-white  px-[10px] flex justify-between items-center text-black pb-[10px] pt-[10px]">
      <div className="flex flex-1 items-center  justify-start text-sm">
        <div className="border-[1px] rounded-lg flex flex-row items-center justify-center  w-[30px] h-[30px]">
          <Menu></Menu>
        </div>
        <Link
          href="/about-us"
          className="text-md ml-[10px] hover:underline text-gray-800 "
        >
          О нас
        </Link>
        <Link href="/all-countries" className="ml-[5px] hover:underline">
          Все страны
        </Link>
      </div>

      <Link className="font-black text-sky-600 text-xl" href="/">
        LightTravel
      </Link>
      <div className="flex flex-1 items-center justify-end">
        <Search className="mr-[10px]"></Search>
        <Link href="/login" className="flex text-sm flex-row">
          <p className="mr-[5px]">Войти</p>
          <LogIn className=""></LogIn>
        </Link>
      </div>
    </header>
  );
}
