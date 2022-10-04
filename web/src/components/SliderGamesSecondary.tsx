import { useKeenSlider } from "keen-slider/react";
import { useEffect } from "react";
import { Game } from "../screens/Home/Home";
import { GameBannerSecondary } from "./GameBannerSecondary";

interface Props {
  games: Game[];
}

export const SliderGamesSecondary = (props: Props) => {
  var sliderOptions = {
    breakpoints: {
      "(min-width: 200px)": {
        slides: { perView: 2.5, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 5.5, spacing: 10 },
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
        {props.games?.map((game) => {
          k++;
          return (
            <div
              key={k}
              className={`keen-slider__slide number-slide${k}"rounded-lg"`}
            >
              <GameBannerSecondary
                key={game.id}
                bannerUrl={game.bannerUrl}
                title={game.title}
                adsCount={game._count.ads}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
