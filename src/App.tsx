import { useState } from "react";
import List from "./components/list";
import { Item, Status, data } from "./data";
import Chart from "./components/chart";

function App() {
  const [activeItem, setActiveItem] = useState<Item | null>(null);
  const [state, setState] = useState(data);

  const handleDrop = (indicatorId: number, column: Status) => {
    if (!activeItem || activeItem.id === indicatorId) return;

    const item = { ...activeItem, status: column };

    const newState = state.filter((item) => item.id !== activeItem.id);

    if (indicatorId === -1) {
      newState.push(item);
    } else {
      const insertAtIndex = newState.findIndex(({ id }) => id === indicatorId);

      newState.splice(insertAtIndex, 0, item);
    }

    setState(newState);
  };

  return (
    <div className="w-full min-h-screen">
      <div className="max-w-[1024px] mx-auto p-4">
        <section className="flex items-center justify-center">
          <Chart data={state} />
        </section>
        <section className="flex items-start gap-4">
          <List
            items={state.filter(({ status }) => status === "unpaid")}
            status="unpaid"
            onDragEnd={handleDrop}
            setActiveItem={setActiveItem}
          />
          <List
            items={state.filter(({ status }) => status === "paid")}
            status="paid"
            onDragEnd={handleDrop}
            setActiveItem={setActiveItem}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
