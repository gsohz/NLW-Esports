import { GameBanner } from "./GameBanner";

interface InfoBannerProps {
  title: string;
  subtitle: string;
  imgUrl: string[];
}

function InfoBanner({ title, subtitle, imgUrl }: InfoBannerProps) {
  return (
    <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg">
      <div className="bg-[#2A2634] py-6 px-8 text-white rounded-lg w-[580px] shadow-lg shadow-black/25 overflow-x-hidden">
        <strong className="font-black text-xl">{title}</strong>
        <span className="text-zinc-400 block">{subtitle}</span>
        {/*colocar carousel*/}
        <div className="flex flex-row gap-4 mt-5 ">
          {imgUrl.map((imgSrc) => {
            return <img src={imgSrc} className="h-32" />;
          })}
        </div>
      </div>
    </div>
  );
}

export default InfoBanner;
