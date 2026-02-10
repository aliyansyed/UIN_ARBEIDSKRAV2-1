import ShoppingItem from "./ShoppingItem"

export default function ShoppingList({ items, toggleBought, updateAmount }) {
  return (
    <section>
      <ul>
        {items.map(item => (
          <ShoppingItem
            key={item.id}
            item={item}
            toggleBought={toggleBought}
            updateAmount={updateAmount}
          />
        ))}
      </ul>
    </section>
  )
}
