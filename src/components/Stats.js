export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Let's Start adding some items to your packing List🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You already done with packing...Enjoy your trip✈️"
          : `You have ${numItems} items on your list and you already packed
        ${numPacked} of them (${percentage}%)`}
      </em>
    </footer>
  );
}
