export type Status = "paid" | "unpaid";

export type Item = {
  id: number;
  title: string;
  price: number;
  status: Status;
};

export const data: Item[] = [
  {
    id: 1,
    title: "item-1",
    status: "paid",
    price: 10,
  },
  {
    id: 2,
    title: "item-2",
    status: "paid",
    price: 20,
  },
  {
    id: 3,
    title: "item-3",
    status: "unpaid",
    price: 30,
  },
  {
    id: 4,
    title: "item-4",
    status: "unpaid",
    price: 40,
  },
  {
    id: 5,
    title: "item-5",
    status: "paid",
    price: 50,
  },
  {
    id: 6,
    title: "item-6",
    status: "paid",
    price: 80,
  },
  {
    id: 7,
    title: "item-7",
    status: "paid",
    price: 20,
  },
  {
    id: 8,
    title: "item-8",
    status: "paid",
    price: 10,
  },
];
