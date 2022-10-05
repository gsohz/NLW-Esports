import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import { useKeenSlider } from "keen-slider/react";
import { MagnifyingGlassPlus } from "phosphor-react";
import { useEffect, useState } from "react";
import { Game } from "../screens/Home/Home";
import DuoCardBanner from "./DuoCardBanner";

interface Props {
  game: Game;
}

export interface Anuncio {
  id: string;
  hourStart: string;
  hourEnd: string;
  name: string;
  useVoiceChannel: true;
  weekDays: string[];
  yearsPlaying: number;
  discord: string;
}

export const DuoCardModal = ({ game }: Props) => {
  const [ads, setAds] = useState<Anuncio[]>([]);

  useEffect(() => {
    axios(`http://localhost:3000/games/${game.id}/ads`).then((res) =>
      setAds(res.data)
    );
  }, []);

  var sliderOptions = {
    breakpoints: {
      "(min-width: 200px)": {
        slides: { perView: 1.5, spacing: 20 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 2.5, spacing: 25 },
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
  ads.map((ad) => console.log(ad.name));
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#1e182b] py-8 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg sm:w-[30em] md:w-[40em] lg:w-[60em] xl:w-[70em] shadow-lg shadow-black/25 ">
        <Dialog.Title className="text-4xl font-black bg-nlw-gradient bg-clip-text text-white/10 px-10 w-fit">
          {game.title}
        </Dialog.Title>

        <div className="mt-2  flex flex-col gap-4">
          <span className="font-semibold px-10">
            Conecte-se e comece a jogar!
          </span>

          <div className="bg-lvlup bg-cover bg-no-repeat shadow-black shadow-sm">
            <div className="flex bg-game-gradient pb-6">
              <div className="flex justify-center items-center  ml-12 mt-4 mr-5 w-2/6">
                <img
                  src={game.bannerUrl}
                  alt=""
                  className="md:w-52 lg:w-64 xl:w-72 rounded-xl shadow-black/70 shadow-lg transform -skew-y-2  sm:invisible md:relative sm:absolute md:visible "
                />
              </div>

              <div className="w-4/6">
                <div className="overflow-hidden md:ml-14 mt-7">
                  {game._count.ads === 0 ? (
                    <div>Crie um anúncio</div>
                  ) : (
                    <div className="navigation-wrapper sm:mx-6 md:mx-4 lg:mx-2 ">
                      <div ref={internalSliderRef} className="keen-slider">
                        {ads.map((ad) => {
                          k++;
                          return (
                            <div
                              key={k}
                              className={`keen-slider__slide number-slide${k} rounded-lg `}
                            >
                              <div className="w-72">
                                <DuoCardBanner ad={ad} />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-2 flex justify-end gap-4 px-10">
            <div className="text-zinc-500 mr-auto text-sm">
              Contagem de anúncios para {game.title}: {game._count.ads}
              {game._count.ads === 1 ? " anúncio" : " anúncios"}
            </div>
            <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600 sm:text-[12px] md:text-base">
              Cancelar
            </Dialog.Close>
            <button
              type="submit"
              className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600 "
            >
              <MagnifyingGlassPlus size={24} />
              <div className="sm:text-[12px] md:text-base">
                Publicar anúncio
              </div>
            </button>
          </footer>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
