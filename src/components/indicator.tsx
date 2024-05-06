export default function Indicator({ id }: { id?: number }) {
  return (
    <div
      data-id={id}
      className="item-indicator my-1.5 h-0.5 w-full bg-gray-300 opacity-0"
    />
  );
}
