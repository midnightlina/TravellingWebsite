import Link from "next/link";
export default function Footer() {
  return (
    <footer className=" flex flex-col">
      <div className="bg-orange-500 text-white flex font-bold py-[10px] items-center px-[10px] justify-between flex-row">
        <p>Lets get connected!</p>
        <div className="flex flex-row flex-1 max-w-[300px] justify-between">
          <Link className="hover:underline" href="/youtube.com">
            Youtube
          </Link>
          <p>Pinterest</p>
          <p>Max</p>
          <p>Github</p>
        </div>
      </div>
      <div className="flex flex-col">we have free emails</div>
    </footer>
  );
}
