import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";
import { Game } from "../screens/Home/Home";
import { GameBannerMain } from "./GameBannerMain";

interface Props {
  games: Game[];
  handleClick: (game: Game) => void;
}

export const SliderMain = (props: Props) => {
  var sliderOptions = {
    breakpoints: {
      "(min-width: 200px)": {
        slides: { perView: 2.2, spacing: 5 },
      },
      "(min-width: 400px)": {
        slides: { perView: 3.5, spacing: 5 },
      },
      "(min-width: 600px)": {
        slides: { perView: 4.5, spacing: 5 },
      },
      "(min-width: 800px)": {
        slides: { perView: 4.5, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 5.5, spacing: 10 },
      },
      "(min-width: 1200px)": {
        slides: { perView: 6.5, spacing: 10 },
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
    <div className="navigation-wrapper sm:mx-6 md:mx-4 lg:mx-2">
      <div ref={internalSliderRef} className="keen-slider">
        {props.games.map((game) => {
          k++;
          return (
            <div
              key={k}
              className={`keen-slider__slide number-slide${k} rounded-lg`}
              onClick={() => props.handleClick(game)}
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
