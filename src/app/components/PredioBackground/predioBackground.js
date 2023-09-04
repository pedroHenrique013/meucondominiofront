import Image from "next/image";

export default function PredioBackground() {
  return (
    <div className="h-screen w-full max-xl:hidden">
      <img src="/Predio.png" className="h-screen w-screen" />
    </div>
  );
}
