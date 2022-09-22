interface GameBannerProps {
  bannerUrl?: string;
  title: string;
  adsCount: number;
  streamers?: string;
}

export function GameBannerSecondary(props: GameBannerProps) {
  console.log(props.streamers?.[0]);
  return (
    <>
      <a href="" className="relative overflow-hidden m-0">
        <img
          src={props.streamers ? props.streamers : props.bannerUrl}
          alt=""
          className={`w-full h-full rounded-${props.streamers ? "full" : "lg"}`}
        />
      </a>
      <span className="mt-1 text-white">
        {props.streamers ? props.title : ""}
      </span>
    </>
  );
}
