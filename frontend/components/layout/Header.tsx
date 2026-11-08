import { Menu, LogIn, Search } from "lucide-react";
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-white  px-[10px] flex justify-between text-black pb-[10px] pt-[10px]">
      <div className="flex flex-1  justify-start">
        <Menu></Menu>
        <Link href="/about-us" className=" text-gray-900 ">
          О нас
        </Link>
        <Link href="/all-countries">Все страны</Link>
      </div>

      <Link className="font-black text-sky-600 text-xl" href="/">
        LightTravel
      </Link>
      <div className="flex flex-1 justify-end">
        <Search></Search>
        <Link href="/login">
          <LogIn className=""></LogIn>
        </Link>
      </div>
    </header>
  );
}
