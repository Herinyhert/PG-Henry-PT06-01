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

import { User, postUser } from "../../../actions";


export interface CardUserProps {
  user: User;
}

export default function FormDialog({ user }: CardUserProps) {
  const dispatch = useDispatch<any>();
  const [input, setInput] = useState({
    id: user.id,
    name: user.name,
    surname: user.surname,
    email: user.email,
    password: null,
    state: user.state,
    role: user.role,
  });

  const token = useSelector((state: ReduxState) => state.token);
  let categories = useSelector((state: ReduxState) => state.categorias);
  //let [image, setImage] = useState<File>();

  function handlechange(e) {
    
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
  }

  /* async function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    handlePostImage(e.target.files[0]);
  }

  async function handlePostImage(images:File) {
    const url = await postImage(images);
    console.log(url);
    setInput({
      ...input,
      img: url,
    });
  } */

  function handelSubmit(e) {
    e.preventDefault();
    dispatch(postUser(token, input));
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
        {user.id ? "Update" : "Create"}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Product</DialogTitle>
        {/* <IconButton color="primary" component="label">
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => handleImageChange(e)}
          />
          <AttachFileIcon fontSize="medium" />
        </IconButton> */}
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
            id="surname"
            name="surname"
            label="Surname"
            type="text"
            value={input.surname}
            fullWidth
            variant="standard"
            onChange={(e) => handlechange(e)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            name="email"
            label="Email"
            type="text"
            value={input.email}
            fullWidth
            variant="standard"
            onChange={(e) => handlechange(e)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="password"
            name="password"
            label="Password"
            value={input.password}
            type="password"
            fullWidth
            variant="standard"
            onChange={(e) => handlechange(e)}
          />

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
              <MenuItem value="true">Active</MenuItem>
              <MenuItem value="false">Inactive</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: "100%" }} size="small">
            <InputLabel id="state">Rol</InputLabel>
            <Select
              labelId="role"
              id="role"
              name="role"
              value={input.role}
              label="Role"
              onChange={handlechange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="ADMIN">ADMIN</MenuItem>
              <MenuItem value="CLIENT">CLIENT</MenuItem>
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
