import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image src="/Logo.png" width={419} height={120} className="mb-4" />
    </div>
  );
}
