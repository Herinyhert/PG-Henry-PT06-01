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

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

import { FaStar } from "react-icons/fa";



export default function DenseTable() {
  const [state, setState] = useState({
    page: 1,
    pageSize: 12,
    name: undefined,
    order: undefined,
    direction: undefined,
    filter: null,
    userId: null
  });

  const allUser = useSelector((state: ReduxState) => state.usersbo);
  const totalUser = useSelector((state1: ReduxState) => state1.totalUser);
  const user = useSelector((state: ReduxState) => state.user);

  const dispatch = useDispatch<any>();

  async function handlechangeFilter(e) {
    setState({
      ...state,
      ["filter"]: [e.target.name] + "-" + e.target.value,
    });
    await dispatch(
      getUsersBO({
        page: 1,
        pageSize: 12,
        name: state.name,
        order: "id",
        direction: "desc",
        filter: [e.target.name] + "-" + e.target.value,
        userId: user.role === "CLIENT" ? user.id : null,
      })
    );
  }

  async function setPaginate(page) {
    setState({ ...state, page });
    await dispatch(
      getUsersBO({
        page: page,
        pageSize: 12,
        name: state.name,
        order: "id",
        direction: "desc",
        filter: state.filter,
        userId: user.role === "CLIENT" ? user.id : null,
      })
    );
  }

  async function clickDelete(id) {
    await dispatch(deleteUserBO(id));
    await dispatch(
      getUsersBO({
        page: 1,
        pageSize: 12,
        name: "",
        order: "id",
        direction: "desc",
        filter: state.filter,
        userId: user.role === "CLIENT" ? user.id : null,
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
                <TableCell>Puntos</TableCell>
                <TableCell align="right">Producto</TableCell>
                <TableCell align="right">Marca</TableCell>
                <TableCell align="right">Categoria</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allUser.map((row) =>
                row.review?.map((rev) => (
                  <TableRow
                    key={rev.productId}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">
                      {rev
                        ? [...Array(rev.value)].map((start, i) => {
                            const ratingValue = i + 1;
                            return (
                              <Stars>
                                <FaStar color={"#ffc107"} size={15} />
                              </Stars>
                            );
                          })
                        : null}
                    </TableCell>
                    <TableCell align="right">{rev.product?.name}</TableCell>
                    <TableCell align="right">{rev.product?.brand}</TableCell>
                    <TableCell align="right">
                      {rev.product?.category.name}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Paginado
        onPageChange={(page) => setPaginate(page)}
        totalCount={totalUser}
        pageSize={state.pageSize}
      />
    </>
  );
}
const Stars = styled.div`
  cursor: pointer;
  transition: color 200ms;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
`;
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
