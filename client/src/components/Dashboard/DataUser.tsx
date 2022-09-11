import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../reducer";
import { getUsersBO, deleteUserBO } from "../../actions";
import Paginado from "../Paginado/Paginado";
import ButtonMUI from "@mui/material/Button";

//import UpdateProduct from "../Dashboard/Dialogs/UpdateProduct";
import CreateUser from "./Dialogs/CreateUser";


export default function DenseTable() {
  const [state, setState] = useState({
    page: 1,
    pageSize: 12,
    name: undefined,
    order: undefined,
    direction: undefined
  });

  const allUser = useSelector((state: ReduxState) => state.users);
  const totalUser = useSelector((state1: ReduxState) => state1.totalUser);

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(
      getUsersBO({
        page: state.page,
        pageSize: state.pageSize,
        name: state.name,
        order: state.order,
        direction: state.direction
      })
    );
  }, [
    dispatch,
    state.page,
    state.pageSize,
    state.name,
    state.order,
    state.direction
  ]);

  async function clickDelete(id) {
    await dispatch(deleteUserBO(id));
    await dispatch(
      getUsersBO({
        page: state.page,
        pageSize: 12,
        name: "",
        order: "id",
        direction: "desc",
      })
    );
  }
  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
          <Table
            sx={{ minWidth: 650 }}
            size="small"
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Surname</TableCell>
                <TableCell align="right">Password</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">State</TableCell>
                <TableCell align="right">Rol</TableCell>
                <TableCell align="right">Update</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allUser.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.surname}</TableCell>
                  <TableCell align="right">************</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">
                    {row.state ? "Active" : "Inactive"}
                  </TableCell>
                  <TableCell align="right">{row.role}</TableCell>
                  <TableCell align="right">
                    <CreateUser user={row} stateC={state} />
                  </TableCell>
                  <TableCell align="right">
                    <ButtonMUI
                      variant="outlined"
                      onClick={() => clickDelete(row.id)}
                    >
                      Delete
                    </ButtonMUI>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Paginado
        onPageChange={(page) => setState({ ...state, page })}
        totalCount={totalUser}
        pageSize={state.pageSize}
      />
    </>
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
