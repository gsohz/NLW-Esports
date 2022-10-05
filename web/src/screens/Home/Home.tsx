import LogoImg from "../../assets/logo-nlw-esports.svg";

import { GameBannerMain } from "../../components/GameBannerMain";
import { CreateAdBanner } from "../../components/CreateAdBanner";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";

import { CreateAdModal } from "../../components/CreateAdModal";

import { SliderMain } from "../../components/SliderGamesMain";
import { DuoCardModal } from "../../components/DuoCardModal";

export interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function Home() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game>();

  useEffect(() => {
    axios("http://localhost:3000/games").then((res) => setGames(res.data));
  }, []);

  return (
    <div className="bg-[#121214] bg-galaxy bg-[length:100%] md:bg-cover bg-no-repeat bg-top w-full min-h-screen">
      <div className="max-w-[1344px] min-h-screen mx-auto flex flex-col">
        <div className="bg-nlw-gradient sm:h-[4.3rem] sm:w-[4.3rem] md:h-[6.5rem] md:w-[6.5rem] flex items-center justify-center rounded-full absolute right-0 top-0 m-6 opacity-50 hover:opacity-100">
          <a href="/profile">
            <img
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/03307b83-e11f-4550-b474-a985268cefb2-profile_image-300x300.png"
              className="sm:w-16 sm:h-16 md:w-24 md:h-24 rounded-full "
            ></img>
          </a>
        </div>

        <div className="flex flex-col min-h-full items-center">
          <img src={LogoImg} alt="logo" className="w-32 md:w-44 lg:w-64 mt-7" />

          <h1 className="lg:text-4xl text-white font-black mt-10">
            Seu{" "}
            <span className="bg-nlw-gradient bg-clip-text text-transparent">
              duo
            </span>{" "}
            está aqui.
          </h1>
        </div>

        <div className="ml-7 mt-8">
          <SliderMain
            games={games}
            handleClick={(game: Game) => setSelectedGame(game)}
          />
        </div>
        <Dialog.Root
          open={!!selectedGame?.id}
          onOpenChange={() => setSelectedGame(undefined)}
        >
          {selectedGame !== undefined && <DuoCardModal game={selectedGame} />}
        </Dialog.Root>

        <Dialog.Root>
          <CreateAdBanner />
          <CreateAdModal />
        </Dialog.Root>
      </div>
    </div>
  );
}

export default Home;
