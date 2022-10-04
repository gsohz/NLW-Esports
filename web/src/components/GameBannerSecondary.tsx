interface GameBannerProps {
  bannerUrl?: string;
  title: string;
  adsCount: number;
  streamers?: string;
}

export function GameBannerSecondary(props: GameBannerProps) {
  return (
    <>
      <a href="" className="relative overflow-hidden m-0">
        <img
          src={props.streamers ? props.streamers : props.bannerUrl}
          alt=""
          className={`w-full h-${props.streamers ? "24" : "full"} rounded-${
            props.streamers ? "full" : "lg"
          }`}
        />
      </a>
      <span className="mt-1 text-white text-center">
        {props.streamers ? props.title : ""}
      </span>
    </>
  );
}
