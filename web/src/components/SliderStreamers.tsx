import { useKeenSlider } from "keen-slider/react";
import { useEffect } from "react";
import { Game } from "../screens/Home/Home";
import { Streamer } from "../screens/Profile/Profile";
import { GameBannerSecondary } from "./GameBannerSecondary";

interface Props {
  streamers?: Streamer[];
}

export const SliderStreamers = (props: Props) => {
  var sliderOptions = {
    breakpoints: {
      "(min-width: 200px)": {
        slides: { perView: 3.5, spacing: 10 },
      },
      "(min-width: 600px)": {
        slides: { perView: 4.5, spacing: 5 },
      },
      "(min-width: 800px)": {
        slides: { perView: 4.5, spacing: 15 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 5.5, spacing: 15 },
      },
    },
  };

  const [internalSliderRef, internalSlider] = useKeenSlider(sliderOptions);

  useEffect(() => {
    internalSlider.current?.update({
      ...sliderOptions,
    });
  }, [internalSlider, sliderOptions]);

  var k = 0;

  return (
    <div className="navigation-wrapper">
      <div ref={internalSliderRef} className="keen-slider">
        {props.streamers?.map((streamer) => {
          k++;
          return (
            <div key={k} className={`keen-slider__slide number-slide${k}`}>
              <div className="flex flex-col">
                <GameBannerSecondary
                  title={streamer.name}
                  adsCount={0}
                  streamers={streamer.picUrl}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
