import { Item } from "@/data";
import { useIsMobile } from "@/hooks/use-breakpoint";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Chart({ data }: { data: Item[] }) {
  const isMobile = useIsMobile();

  return (
    <LineChart
      width={isMobile ? 360 : 700}
      height={isMobile ? 200 : 400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="title" />
      <YAxis dataKey="price" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="price" stroke="#82ca9d" />
    </LineChart>
  );
}
