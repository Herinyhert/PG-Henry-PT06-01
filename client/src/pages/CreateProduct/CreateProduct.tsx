import { privateDecrypt } from "crypto";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { postProduct } from "../../actions";

export default function CreateProduct() {
  const dispatch = useDispatch<any>();
  const [input, setInput] = useState({
    name: "",
    brand: "",
    img: "",
    state: "",
    price: undefined,
    stock: undefined,
    categoryId: undefined,
  });

  function handlechange(e) {
    if (e.target.name === "price") {
      setInput({
        ...input,
        [e.target.name]: parseFloat(e.target.value),
      });
    } else if (e.target.name === "stock" || e.target.name === "categoryId") {
      setInput({
        ...input,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    }
  }

  function handelSubmit(e) {
      e.preventDefault()
      console.log(input)
    dispatch(postProduct(input));
  }

  return (
    <div>
      <form onSubmit={(e) => handelSubmit(e)}>
        <div>
          <label>Nombre</label>
          <input type="text" name="name" onChange={(e) => handlechange(e)} />
        </div>
        <div>
          <label>Marca</label>
          <input type="text" name="brand" onChange={(e) => handlechange(e)} />
        </div>
        <div>
          <label>Imagen</label>
          <input type="text" name="img" onChange={(e) => handlechange(e)} />
        </div>
        <div>
          <label>Estado</label>
          <input type="text" name="state" onChange={(e) => handlechange(e)} />
        </div>
        <div>
          <label>Precio</label>
          <input type="number" name="price" onChange={(e) => handlechange(e)} />
        </div>
        <div>
          <label>Stock</label>
          <input type="number" name="stock" onChange={(e) => handlechange(e)} />
        </div>
        <div>
          <label>Categoria</label>
          <input type="number" name="categoryId" onChange={(e) => handlechange(e)} />
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}
