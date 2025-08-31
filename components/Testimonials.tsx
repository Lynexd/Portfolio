import Image from "next/image";
import { testimonials } from "@/utils/variables";

export default function Testimonials() {
  return (
    <div className="container mx-auto pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12">
      <header className="space-y-2 my-8">
        <h3 className="font-semibold text-3xl text-zinc-200"> Müşteri Yorumlarımız </h3>
        <p className="text-zinc-400"> Bizimle Çalışan Müşterilerimizin Geri Bildirimleri. </p>
      </header>

      <div className="w-full overflow-hidden">
        <div className="relative flex w-[200%] animate-marquee">
          {[...testimonials, ...testimonials].map(({ name, comment, avatar }, index) => (
            <div
              key={index}
              className="flex flex-col justify-between w-72 mx-6 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800 shadow-md shadow-black/40 flex-shrink-0"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src={avatar}
                  alt={name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <span className="font-semibold text-zinc-200">{name}</span>
              </div>
              <p className="text-zinc-400 text-sm line-clamp-4">{comment}</p>
            </div>
          ))}
        </div>
      </div>

<style jsx>{`
  @keyframes marquee-right {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  .animate-marquee {
    animation: marquee-right 30s linear infinite;
  }
`}</style>

    </div>
  );
}
