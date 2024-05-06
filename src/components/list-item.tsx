import { Item } from "@/data";
import Indicator from "./indicator";

interface ListItemProps {
  item: Item;
  setActiveItem: (item: Item) => void;
}

export default function ListItem({ item, setActiveItem }: ListItemProps) {
  return (
    <>
      <Indicator id={item.id} />
      <span
        className="w-full px-4 py-2 bg-white hover:bg-gray-100 hover:cursor-pointer transition-colors duration-150 ease-in-out"
        draggable
        onDragStart={() => setActiveItem(item)}
        onTouchStart={() => setActiveItem(item)}
      >
        {item.title}
      </span>
    </>
  );
}
