import LogoImg from "../../assets/logo-nlw-esports.svg";
import InfoBanner from "../../components/InfoBanner";
import { CaretLeft } from "phosphor-react";
import { useEffect, useState } from "react";
import { Game } from "../Home/Home";
import axios from "axios";

export interface Streamer {
  id: string;
  name: string;
  picUrl: string;
  linkUrl: string;
}

function Profile() {
  const [games, setGames] = useState<Game[]>([]);
  const [streamers, setStreamers] = useState<Streamer[]>([]);

  useEffect(() => {
    axios("http://localhost:3000/games").then((res) => setGames(res.data));
    axios("http://localhost:3000/streamers").then((res) =>
      setStreamers(res.data)
    );
  }, []);

  return (
    <div className="bg-[#121214] bg-galaxy bg-[length:100%] md:bg-fit bg-no-repeat bg-top w-full min-h-screen">
      <div className="max-w-[1344px] mx-auto flex flex-col gap-6">
        <div className="z-0 flex flex-col items-center">
          <img
            src={LogoImg}
            alt="logo"
            className="opacity-5 pointer-events-none w-[36rem] absolute my-8"
          />
        </div>

        <a href="/">
          <CaretLeft
            size={32}
            color="white"
            className="absolute left-0 top-0 m-6"
          />
        </a>

        <div className="z-10 flex flex-col gap-6 items-center my-8">
          <div className="bg-nlw-gradient h-[8.5rem] w-[8.5rem] flex items-center justify-center rounded-full">
            <img
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/03307b83-e11f-4550-b474-a985268cefb2-profile_image-300x300.png"
              className="w-32 h-32 rounded-full "
            ></img>
          </div>
        </div>

        <div className="z-10 flex flex-col items-center gap-6 w-full sm:px-10 md:px-32 lg:px-56 xl:px-80 mb-32">
          <InfoBanner
            title="Meus Jogos"
            subtitle="Os games que eu mais curto jogar!"
            games={games}
          />

          <InfoBanner
            title="Canais e streamers"
            subtitle="Lista de canais e transmissões que não perco!"
            streamers={streamers}
          />
          <InfoBanner
            title="Minhas redes"
            subtitle="Se conecte comigo agora mesmo!"
            games={games}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
