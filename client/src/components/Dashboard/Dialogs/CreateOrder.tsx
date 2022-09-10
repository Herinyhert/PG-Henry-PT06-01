import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import AttachFileIcon from "@mui/icons-material/AttachFile";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { postProduct } from "../../../actions";
import { postImage } from "../../../services/api/postImage";
import { ReduxState } from "../../../reducer/index";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { Articulo } from "../../../actions";

export interface CardProductProps {
  articulo: Articulo;
}

export default function FormDialog({ articulo }: CardProductProps) {
  const dispatch = useDispatch<any>();
  const [input, setInput] = useState({
    id: articulo.id,
    name: articulo.name,
    brand: articulo.brand,
    img: articulo.img,
    state: articulo.state,
    price: articulo.price,
    stock: articulo.stock,
    categoryId: articulo.category.id,
  });

  const token = useSelector((state: ReduxState) => state.token);
  let categories = useSelector((state: ReduxState) => state.categorias);
  //let [image, setImage] = useState<File>();

  function handlechange(e) {
    console.log(e.target);
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

  async function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    //setImage(e.target.files[0]);
    handlePostImage(e.target.files[0]);
  }

  async function handlePostImage(images:File) {
    /* e.preventDefault(); */
    const url = await postImage(images);
    console.log(url);
    setInput({
      ...input,
      img: url,
    });
  }

  function handelSubmit(e) {
    console.log(input);
    e.preventDefault();
    dispatch(postProduct(token, input));
  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  /* const [state, setStatus] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  }; */

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" fullWidth onClick={handleClickOpen}>
        {articulo.id ? "Update" : "Create"}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Product</DialogTitle>
        <IconButton color="primary" component="label">
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => handleImageChange(e)}
          />
          <AttachFileIcon fontSize="medium" />
        </IconButton>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={input.name}
            variant="standard"
            onChange={(e) => handlechange(e)}
          />

          {/* <Button onClick={(e) => handlePostImage(e)}>Subir Imagen</Button> */}
          <TextField
            autoFocus
            margin="dense"
            id="price"
            name="price"
            label="Precio"
            type="number"
            value={input.price}
            fullWidth
            variant="standard"
            onChange={(e) => handlechange(e)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="stock"
            name="stock"
            label="Stock"
            type="number"
            value={input.stock}
            fullWidth
            variant="standard"
            onChange={(e) => handlechange(e)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="brand"
            name="brand"
            label="brand"
            value={input.brand}
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => handlechange(e)}
          />

          <FormControl sx={{ m: 1, width: "100%" }} size="small">
            <InputLabel id="category">Category</InputLabel>
            <Select
              labelId="category"
              id="categoryId"
              name="categoryId"
              label="categoryId"
              value={input.categoryId}
              onChange={handlechange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {categories?.map((r, i) => (
                <MenuItem value={r.id}>{r.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, width: "100%" }} size="small">
            <InputLabel id="state">State</InputLabel>
            <Select
              labelId="state"
              id="state"
              name="state"
              value={input.state}
              label="state"
              onChange={handlechange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="A">Active</MenuItem>
              <MenuItem value="I">Inactive</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handelSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
