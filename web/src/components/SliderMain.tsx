import { useKeenSlider } from "keen-slider/react";
import { useEffect } from "react";
import { Game } from "../screens/Home/Home";
import { GameBannerMain } from "./GameBannerMain";

interface Props {
  games: Game[];
}

export const SliderMain = (props: Props) => {
  var sliderOptions = {
    slides: {
      perView: 6,
      spacing: 30,
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
        {props.games.map((game) => {
          k++;
          return (
            <div
              key={k}
              className={`keen-slider__slide number-slide${k} rounded-lg`}
            >
              <GameBannerMain
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
