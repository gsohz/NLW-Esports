import { Anuncio } from "./DuoCardModal";

interface Props {
  ad: Anuncio;
}

export default function DuoCardBanner({ ad }: Props) {
  var k = 0;
  return (
    <div className=" bg-[#2A2634] bg-galaxy w-72 rounded">
      <div className="flex flex-col px-12 py-10">
        <div className="flex flex-col">
          <span className="text-sm text-zinc-500">Nome </span>
          <strong className="truncate">{ad.name}</strong>
        </div>

        <div className="flex flex-col">
          <span className="text-sm text-zinc-500 mt-2">Discord </span>
          <strong>{ad.discord}</strong>
        </div>

        <div className="flex flex-col">
          <span className="text-sm text-zinc-500 mt-2">Tempo de jogo </span>
          <strong>
            {ad.yearsPlaying > 1
              ? `${ad.yearsPlaying} anos`
              : `${ad.yearsPlaying} ano`}
          </strong>
        </div>

        <div className="flex flex-col">
          <span className="text-sm text-zinc-500 mt-2">Disponibilidade </span>
          <div className="flex flex-col">
            <strong>
              {ad.weekDays.map((day) => {
                k++;
                const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
                let numberDay: number = parseInt(day);
                if (numberDay >= 0 && k < ad.weekDays.length) {
                  return days[numberDay] + ", ";
                } else {
                  return days[numberDay];
                }
              })}
            </strong>
            <strong>
              {ad.hourStart} - {ad.hourEnd}
            </strong>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-sm text-zinc-500 mt-2">Chamada de áudio</span>
          <strong
            className={`${
              ad.useVoiceChannel === true ? "text-[#34D399]" : "text-[#F87171]"
            }`}
          >
            {ad.useVoiceChannel === true ? "Sim" : "Não"}
          </strong>
        </div>
      </div>
    </div>
  );
}
