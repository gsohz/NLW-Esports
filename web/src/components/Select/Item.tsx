import * as Select from "@radix-ui/react-select";
import { GameProps } from "../CreateAdModal";

interface SelectProps {
  game: GameProps;
}

export function Item(data: SelectProps) {
  return (
    <Select.Item
      value={data.game.id}
      className="flex justify-center items-center hover:bg-zinc-800 shadow-md rounded py-2 px-32"
    >
      <Select.ItemText>{data.game.title}</Select.ItemText>
      <Select.ItemIndicator />
    </Select.Item>
  );
}
