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
import { getArticulos, deleteProductBO,getArticulosBO } from "../../actions";
import Paginado from "../../components/Paginado/Paginado";
import ButtonMUI from "@mui/material/Button";
import CreateProduct from "../Dashboard/Dialogs/CreateProduct";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { FaStar } from "react-icons/fa";


export default function DenseTable() {
  const [state, setState] = useState({
    page: 1,
    pageSize: 12,
    name: null,
    order: undefined,
    direction: undefined,
    categoryId: undefined,
    filter: null,
  });

  let reviewList = [];

  const allProducts = useSelector((state: ReduxState) => state.articulosbo);

  allProducts.map((item) => {
    let avg = 0;
    item.review?.map((data, index) => {
      avg = (avg + data.value) / (index + 1);
    });
    reviewList[item.id] = Math.round(avg);
  });

  const totalCount = useSelector((state1: ReduxState) => state1.totalCount);
  const dispatch = useDispatch<any>();

  async function setPaginate(page) {
    setState({ ...state, page });
    await dispatch(
      getArticulosBO({
        page: page,
        pageSize: 12,
        name: state.name,
        order: "id",
        direction: "desc",
        categoryId: state.categoryId,
        filter: state.filter,
      })
    );
  }

  async function clickDelete(id) {
    await dispatch(deleteProductBO(id));
    await dispatch(
      getArticulosBO({
        page: state.page,
        pageSize: 12,
        name: state.name,
        order: "id",
        direction: "desc",
        categoryId: state.categoryId,
        filter: state.filter,
      })
    );
  }

  async function handlechangeFilter(e) {
    setState({
      ...state,
      ["filter"]: [e.target.name] + "-" + e.target.value,
    });
    await dispatch(
      getArticulosBO({
        page: 1,
        pageSize: 12,
        name: state.name,
        order: "id",
        direction: "desc",
        categoryId: state.categoryId,
        filter: [e.target.name] + "-" + e.target.value,
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
                <TableCell>Calificación</TableCell>
                <TableCell>Imagenes</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell align="right">Marca</TableCell>
                <TableCell align="right">Categoria</TableCell>
                <TableCell align="right">Cantida Almacen</TableCell>
                <TableCell align="right">Precio</TableCell>
                <TableCell align="right">
                  <FormControl sx={{ m: 1, width: "100%" }} size="small">
                    <InputLabel id="state">Estado</InputLabel>
                    <Select
                      labelId="state"
                      id="state"
                      name="state"
                      label="state"
                      onChange={handlechangeFilter}
                    >
                      <MenuItem value={null} selected>
                        <em>All</em>
                      </MenuItem>
                      <MenuItem value="Active">Activos</MenuItem>
                      <MenuItem value="Inactive">Inactivos</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell align="right">Actualizar</TableCell>
                {/* <TableCell align="right">Borrar</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {allProducts.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    {reviewList[row.id] > 0
                      ? [...Array(reviewList[row.id])].map((start, i) => {
                          const ratingValue = i + 1;
                          return (
                            <Stars>
                              <FaStar color={"#ffc107"} size={15} />
                            </Stars>
                          );
                        })
                      : null}
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={2}>
                      <Avatar
                        alt="Remy Sharp"
                        src={row.img}
                        sx={{ width: 56, height: 56 }}
                      ></Avatar>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.brand}</TableCell>
                  <TableCell align="right">{row.category.name}</TableCell>
                  <TableCell align="right">{row.stock}</TableCell>
                  <TableCell align="right">
                    ${row.price}
                    {` / `}${row.priceSpecial}
                  </TableCell>
                  <TableCell align="right">
                    {row.state.toLowerCase() === "active" ? "Activo" : null}
                    {row.state.toLowerCase() === "a" ? "Activo" : null}
                    {row.state.toLowerCase() === "inactive" ? "Inactivo" : null}
                    {row.state.toLowerCase() === "i" ? "Inactivo" : null}
                  </TableCell>
                  <TableCell align="right">
                    <CreateProduct articulo={row} stateC={state} />
                  </TableCell>
                  {/* <TableCell align="right">
                    <ButtonMUI
                      variant="outlined"
                      onClick={() => clickDelete(row.id)}
                    >
                      Delete
                    </ButtonMUI>
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Paginado
        onPageChange={(page) => setPaginate(page)}
        totalCount={totalCount}
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

const Stars = styled.div`
  cursor: pointer;
  transition: color 200ms;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
`;