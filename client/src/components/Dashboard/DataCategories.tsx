import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useSelector } from "react-redux";
import { ReduxState } from "../../reducer";
import { Category } from "../../actions";

import CreateCategory from "../Dashboard/Dialogs/CreateCategory";

import ButtonMUI from "@mui/material/Button";

import { useDispatch } from "react-redux";
import { getCategorias, deleteCategory } from "../../actions";



function createData(
  id: number,
  name: String,
) {
  return { id, name };
}


export default function DenseTable() {
  const [state, setState] = useState(null);
  const allCategories = useSelector((state: ReduxState) => state.categorias).map(
    (item) => {
      return createData(
        item.id,
        item.name
      );
    }
  );

  function clickDelete(id) {
    dispatch(deleteCategory(id));
  }


  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getCategorias());
  }, [
    dispatch
  ]);

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
      <Table sx={{ minWidth: 650 }} size="small" stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Update</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allCategories.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">
                  <CreateCategory category={row} />
                </TableCell>
                <TableCell align="right">
                  <ButtonMUI variant="outlined" onClick={()=>clickDelete(row.id)}>Delete</ButtonMUI>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const Button = styled.button`
  display: block;
  margin: 20px auto;
  width: 100%;
  height: 40px;
  background-color: #335d90;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  color: #fff;

  &:hover {
    box-shadow: 0 0 8px 0 #335d90 inset, 0 0 8px 4px #335d90;
    transform: scale(1.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;
