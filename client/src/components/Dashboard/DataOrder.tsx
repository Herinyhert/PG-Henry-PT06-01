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
import {  deleteProduct, getOrdersBO } from "../../actions";
import Paginado from "../Paginado/Paginado";
import ButtonMUI from "@mui/material/Button";
import ViewDetails from "../Dashboard/Dialogs/ViewDetails";

//import CreateOrder from "./Dialogs/CreateOrder";

export default function DenseTable() {
  const [state, setState] = useState({
    page: 1,
    pageSize: 12,
    name: undefined,
    order: undefined,
    direction: undefined,
    userId: null,
    filter:null
  });
  const allOrders = useSelector((state: ReduxState) => state.ordersBO);
  const totalOrders = useSelector((state1: ReduxState) => state1.totalOrders);
  const user = useSelector((state: ReduxState) => state.user);

  const dispatch = useDispatch<any>();

  async function setPaginate(page) {
    setState({ ...state, page });
    await dispatch(
      getOrdersBO({
        page: page,
        pageSize: 12,
        name: null,
        order: "id",
        direction: "asc",
        filter: null,
        userId: user.role === "CLIENT" ? user.id : null,
      })
    );
  }

  function clickDelete(id) {
        dispatch(deleteProduct(id));
  }

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer
          component={Paper}
          sx={{ maxHeight: 440, maxWidth: 1100 }}
        >
          <Table
            sx={{ minWidth: 650 }}
            size="small"
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow>
                <TableCell>ID de la Orden</TableCell>
                <TableCell align="right">Monto</TableCell>
                <TableCell align="right">Fecha</TableCell>
                <TableCell align="right">Estado</TableCell>
                <TableCell align="right">Usuario</TableCell>
                <TableCell align="right">Pago ID</TableCell>
                <TableCell align="right">Estado del Pago</TableCell>
                <TableCell align="right">Tipo de pago</TableCell>
                <TableCell align="right">Ver Detalles</TableCell>
                {/* <TableCell align="right">Borrar</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {allOrders.map((row) => {
                return (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">{row.id}</TableCell>
                    <TableCell align="right">{row.amount}</TableCell>
                    <TableCell align="right">{row.date.toString()}</TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                    <TableCell align="right">
                      {row.user.email} {row.user.name}
                    </TableCell>
                    <TableCell align="right">{row.payment_id}</TableCell>
                    <TableCell align="right">{row.payment_status}</TableCell>
                    <TableCell align="right">{row.payment_type}</TableCell>
                    <TableCell align="right">
                      <ViewDetails
                        viewdetails={row?.order_detail}
                        stateC={state}
                      />
                    </TableCell>
                    {/* <TableCell align="right">
                      <ButtonMUI
                        variant="outlined"
                        onClick={() => clickDelete(row.id)}
                      >
                        Borrar
                      </ButtonMUI>
                    </TableCell> */}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Paginado
        onPageChange={(page) => setPaginate(page)}
        totalCount={totalOrders}
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
