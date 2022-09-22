import { Game } from "../screens/Home/Home";
import { Streamer } from "../screens/Profile/Profile";
import { SliderSecondary } from "./SliderSecondary";

export interface InfoBannerProps {
  title: string;
  subtitle: string;
  games?: Game[];
  streamers?: Streamer[];
}

function InfoBanner({
  title,
  subtitle,
  games,

  streamers,
}: InfoBannerProps) {
  return (
    <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg">
      <div className="bg-[#2A2634] py-6 px-8 text-white rounded-lg w-[42.5em] shadow-lg shadow-black/25 overflow-x-hidden">
        <strong className="font-black text-xl">{title}</strong>
        <span className="text-zinc-400 block">{subtitle}</span>
        <div className="mt-5">
          <SliderSecondary games={games} streamers={streamers} />
        </div>
      </div>
    </div>
  );
}

export default InfoBanner;
