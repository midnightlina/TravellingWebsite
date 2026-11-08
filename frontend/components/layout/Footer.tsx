import Link from "next/link";
export default function Footer() {
  return (
    <footer className=" flex flex-col">
      <div className="bg-orange-500 text-white flex font-bold py-[10px] items-center px-[10px] justify-between flex-row">
        <p>Будем на связи!</p>
        <div className="flex flex-row flex-1 max-w-[300px] justify-between">
          <Link className="hover:underline" href="/youtube.com">
            Youtube
          </Link>
          <p>Pinterest</p>
          <p>Max</p>
          <p>Github</p>
        </div>
      </div>
      <div className=" bg-gray-900 pt-[20px] text-white px-[10px] flex flex-col">
        <p className="text-xl font-bold"> Забирай лучшее первым </p>
        <p className="w-[400px]">
          С нашим еженедельным дайджестом путешествий с выгодными скидками
        </p>
      </div>
    </footer>
  );
}
