import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Category, postCategory } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../../reducer";

export interface CardCategoryProps {
  category: Category;
}


export default function FormDialog({ category }: CardCategoryProps) {
  const dispatch = useDispatch<any>();
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = useState({
    id: category.id,
    name: category.name,
  });

  const token = useSelector((state: ReduxState) => state.token);

  const handleClickOpen = () => {
    setOpen(true);
  };

  function handleSubmit(e) {
    console.log(input);
    setOpen(false);
    e.preventDefault();
    dispatch(postCategory(token, input));
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  function handlechange(e) {    
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
}

  return (
    <div>
      <Button variant="outlined" fullWidth onClick={handleClickOpen}>
        {category.id ? "Update" : "Create"}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Category</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Category"
            name="name"
            type="text"
            fullWidth
            variant="standard"
            value={input.name}
            onChange={(e) => handlechange(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
