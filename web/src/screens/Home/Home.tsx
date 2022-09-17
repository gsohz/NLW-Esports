import LogoImg from "../../assets/logo-nlw-esports.svg";

import { GameBanner } from "../../components/GameBanner";
import { CreateAdBanner } from "../../components/CreateAdBanner";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";

import { CreateAdModal } from "../../components/CreateAdModal";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function Home() {
  const [games, setGames] = useState<Game[]>([]);

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

  useEffect(() => {
    axios("http://localhost:3000/games").then((res) => setGames(res.data));
  }, []);

  var k = 0;

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-7">
      <div className="bg-nlw-gradient h-[6.5rem] w-[6.5rem] flex items-center justify-center rounded-full absolute right-0 top-0 m-6 opacity-50 hover:opacity-100">
        <a href="/profile">
          <img
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/03307b83-e11f-4550-b474-a985268cefb2-profile_image-300x300.png"
            className="w-24 h-24 rounded-full "
          ></img>
        </a>
      </div>

      <img src={LogoImg} alt="logo" className="w-32 md:w-44 lg:w-64" />

      <h1 className="md:text-4xl lg:text-4xl text-white font-black mt-10">
        Seu{" "}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="navigation-wrapper ml-7 mt-8">
        <div ref={internalSliderRef} className="keen-slider">
          {games.map((game) => {
            k++;
            return (
              <div
                key={k}
                className={`keen-slider__slide number-slide${k} rounded-lg`}
              >
                <GameBanner
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

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default Home;