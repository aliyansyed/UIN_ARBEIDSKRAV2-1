export default function AddForm({ setShoppingList }) {

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target
    const name = form.name.value.trim()
    const amount = Number(form.amount.value)

    if (!name && !amount) {
      alert("Du må fylle ut både vare og antall.")
      return
    }

    if (!name) {
      alert("Du må skrive inn navn på varen.")
      return
    }

    if (!amount) {
      alert("Du må skrive inn antall.")
      return
    }

    if (amount < 1) {
      alert("Antall må være minst 1.")
      return
    }

    const newItem = {
      id: crypto.randomUUID(),
      name,
      amount,
      bought: false
    }

    setShoppingList(prev => [newItem, ...prev])
    form.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Vare
        <input type="text" name="name" />
      </label>

      <label>
        Antall
        <input type="number" name="amount" min="1" />
      </label>

      <button>Legg til vare</button>
    </form>
  )
}
