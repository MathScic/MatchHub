import Image from "next/image";

export default function Banner() {
  return (
    <div className="">
      <img
        src="/images/Banner.png"
        alt="Banner"
        className="absolute top-0 left-0 w-full min-h-screen object-cover"
      />
    </div>
  );
}
