import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col font-display  items-center  flex-1 justify-start   justify-center font-sans ">
      <div className="relative h-[60vh] w-full max-w-[90%] lg:max-w-[1500px]  ">
        <Image
          alt="image"
          src="/pictures/mainchina.jpg"
          fill
          sizes="90vw"
          priority
          className="rounded-[40px] object-cover"
        />
        <p>main page</p>
      </div>
    </div>
  );
}
