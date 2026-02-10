export default function ShoppingItem({ item, toggleBought, updateAmount }) {

  const handleAmountChange = (e) => {
    const value = Number(e.target.value)
    updateAmount(item.id, value)
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={item.bought}
        onChange={() => toggleBought(item.id)}
      />

      {item.name}

      <input
        type="number"
        value={item.amount}
        min="1"
        onChange={handleAmountChange}
      />
    </li>
  )
}
