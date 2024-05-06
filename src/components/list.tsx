import { useRef } from "react";
import { Item, Status } from "@/data";
import ListItem from "./list-item";
import Indicator from "./indicator";

interface ListProps {
  status: Status;
  items: Item[];
  onDragEnd: (indicatorId: number, column: Status) => void;
  setActiveItem: (item: Item) => void;
}

export default function List({
  items,
  status,
  onDragEnd,
  setActiveItem,
}: ListProps) {
  const ref = useRef<HTMLDivElement>(null);

  const getIndicators = () => {
    const container = ref.current;
    if (!container) return [];

    return Array.from(
      container.querySelectorAll(".item-indicator")
    ) as HTMLDivElement[];
  };

  const clearIndicators = () => {
    getIndicators().forEach((indicator) => (indicator.style.opacity = "0"));
  };

  const getNearestIndicator = (clientY: number) => {
    const indicators = getIndicators();

    return indicators.reduce(
      (closest, child) => {
        const { top } = child.getBoundingClientRect();

        const offset = clientY - (top + 50); // 50 is an offset height

        if (offset < 0 && offset > closest.offset) {
          return { offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators.at(-1),
      }
    );
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    clearIndicators();

    const nearestIndicator = getNearestIndicator(event.clientY);

    if (nearestIndicator.element) {
      nearestIndicator.element.style.opacity = "1";
    }
  };

  const handleDragLeave = () => {
    clearIndicators();
  };

  const handleDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    const nearestIndicator = getNearestIndicator(event.clientY);
    const indicatorId = nearestIndicator.element!.dataset.id;

    onDragEnd(Number(indicatorId), status);
    clearIndicators();
  };

  return (
    <div className="w-full bg-white border rounded-lg border-gray-300 py-2">
      <div className="w-full px-4 py-2 border-b border-gray-300">
        <span className="text-black font-bold">{status}</span>
      </div>
      <div
        ref={ref}
        className="flex flex-col"
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {items.map((item) => (
          <ListItem key={item.id} item={item} setActiveItem={setActiveItem} />
        ))}
        <Indicator id={-1} />
      </div>
    </div>
  );
}
