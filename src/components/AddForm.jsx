import { useState } from "react"

export default function AddForm({ setShoppingList }) {

  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const trimmedName = name.trim()
    const numberAmount = Number(amount)

    if (!trimmedName && !numberAmount) {
      setError("Du må fylle ut både vare og antall.")
      return
    }

    if (!trimmedName) {
      setError("Du må skrive inn navn på varen.")
      return
    }

    if (!numberAmount) {
      setError("Du må skrive inn antall.")
      return
    }

    if (numberAmount < 1) {
      setError("Antall må være minst 1.")
      return
    }

    setError("")

    const newItem = {
      id: crypto.randomUUID(),
      name: trimmedName,
      amount: numberAmount,
      bought: false
    }

    setShoppingList(prev => [newItem, ...prev])

    setName("")
    setAmount("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Vare
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Antall
        <input
          type="number"
          min="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>

      <button>Legg til vare</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  )
}
