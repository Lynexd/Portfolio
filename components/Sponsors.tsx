import Image from "next/image";
import { sponsors } from "@/utils/variables";

export default function Sponsors() {
  return (
    <div className="container mx-auto pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12">
      <header className="space-y-2 my-8">
        <h3 className="font-semibold text-3xl text-zinc-200"> Sponsorlarımız </h3>
        <p className="text-zinc-400"> Bizlere Güvenen ve Destekleyen Partnerlerimiz. </p>
      </header>

      <div className="w-full overflow-hidden">
        <div className="relative flex w-[200%] animate-marquee">
          {[...sponsors, ...sponsors].map(({ name, iconURL }, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-48 h-24 mx-6 flex-shrink-0"
            >
              <Image
                src={iconURL}
                alt={name}
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
