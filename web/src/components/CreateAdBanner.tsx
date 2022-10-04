import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

export function CreateAdBanner() {
  return (
    <div className="pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden sm:mx-6 md:mx-4 lg:mx-2">
      <div className="bg-[#2A2634] sm:px-5 md:px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="lg:text-2xl sm:text-lg text-white font-black block">
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400 sm:text-[12px] md:text-base block">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>
        <Dialog.Trigger className="py-3 sm:px-1 md:px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center sm:gap-1 md:gap-3">
          <MagnifyingGlassPlus size={24} />
          <div className="sm:text-[12px] md:text-base">Publicar anúncio</div>
        </Dialog.Trigger>
      </div>
    </div>
  );
}
