import LogoImg from "../../assets/logo-nlw-esports.svg";
import InfoBanner from "../../components/InfoBanner";
import { CaretLeft } from "phosphor-react";

function Profile() {
  const imgs = [
    "game-1.png",
    "game-2.png",
    "game-3.png",
    "game-4.png",
    "game-5.png",
  ];
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col gap-6 items-center my-8">
      <div className="z-0 flex flex-col items-center">
        <img
          src={LogoImg}
          alt="logo"
          className="opacity-5 pointer-events-none w-[36rem] absolute "
        />
      </div>

      <a href="/">
        <CaretLeft
          size={32}
          color="white"
          className="absolute left-0 top-0 m-6"
        />
      </a>

      <div className="z-10 flex flex-col gap-6 items-center">
        <div className="bg-nlw-gradient h-[8.5rem] w-[8.5rem] flex items-center justify-center rounded-full">
          <img
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/03307b83-e11f-4550-b474-a985268cefb2-profile_image-300x300.png"
            className="w-32 h-32 rounded-full "
          ></img>
        </div>

        <InfoBanner
          title="Meus Jogos"
          subtitle="Os games que eu mais curto jogar!"
          imgUrl={imgs}
        />
        <InfoBanner
          title="Canais e streamers"
          subtitle="Lista de canais e transmissões que não perco!"
          imgUrl={imgs}
        />
        <InfoBanner
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo!"
          imgUrl={imgs}
        />
      </div>
    </div>
  );
}

export default Profile;
