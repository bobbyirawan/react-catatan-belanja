import { useState } from "react";

const Form = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name) return;

    const newItem = {
      name,
      quantity,
      checked: false,
      id: Date.now(),
    };

    onAddItem(newItem);

    setName("");
    setQuantity(1);
  };

  const quantityNum = [...Array(20)].map((_, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        >
          {quantityNum}
        </select>
        <input
          type="text"
          placeholder="nama barang..."
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <button>Tambah</button>
    </form>
  );
};

export default Form;
