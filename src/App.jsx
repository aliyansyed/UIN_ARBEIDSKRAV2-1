import { useState } from "react"
import ShoppingList from "./components/ShoppingList"
import AddForm from "./components/AddForm"

function App() {

  const startItems = [
    { id: 1, name: "Melk", amount: 2, bought: false },
    { id: 2, name: "Egg", amount: 1, bought: true }
  ]

  const [shoppingList, setShoppingList] = useState(startItems)

  const toggleBought = (id) => {
    setShoppingList(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, bought: !item.bought }
          : item
      )
    )
  }

  const updateAmount = (id, newAmount) => {
    if (newAmount < 1) return

    setShoppingList(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, amount: newAmount }
          : item
      )
    )
  }

  return (
    <main>
      <h1>Handleliste</h1>

      <AddForm setShoppingList={setShoppingList} />

      <ShoppingList
        items={shoppingList}
        toggleBought={toggleBought}
        updateAmount={updateAmount}
      />
    </main>
  )
}

export default App
