import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CssBaseline } from "@mui/material";
import DataProduct from "./DataProduct";
import DataCategories from "./DataCategories";
import Menu from "./Menu";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import styled from "styled-components";
import NavBar from "../NavBar/NavBar";

import { useSelector } from "react-redux";
import { ReduxState } from "../../reducer";

import CreateProduct from "../Dashboard/Dialogs/CreateProduct";
import CreateCategory from "../Dashboard/Dialogs/CreateCategory";
import SearchBar from "../../components/SearchBar/SearchBar";

import { getArticulos, getCategorias } from "../../actions";


function Dashboard() {
  const [state, setState] = useState({
    page: 1,
    pageSize: 12,
    name: undefined,
    order: undefined,
    direction: undefined,
    categoryId: undefined,
    articuloInit: {
      id: 0,
      name: null,
      brand: null,
      stock: 0,
      price: 0,
      img: null,
      state: null,
      categoryId: 0,
      category: { id: 0, name: null },
      totalCount: 0,
    },
    categoryInit: {
      id: 0,
      name:null
    }
  });

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getCategorias());
    dispatch(
      getArticulos({
        page: state.page,
        pageSize: state.pageSize,
        name: state.name,
        order: state.order,
        direction: state.direction,
        categoryId: state.categoryId,
      })
    );
  }, [
    dispatch,
    state.page,
    state.pageSize,
    state.name,
    state.order,
    state.direction,
    state.categoryId,
  ]);

   const dashboardmenu = useSelector((state: ReduxState) => state.dashboardmenu);

  return (
    <>
      <Body>
        <NavBar />
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                  <Grid item xs={2}>
                    <SearchBar
                      onSearch={(search) =>
                        setState({ ...state, page: 1, name: search })
                      }
                    />
                  </Grid>
                  <Grid item xs={8}></Grid>
                  <Grid item xs={2}>
                    {dashboardmenu === "products" ? (
                      <CreateProduct articulo={state.articuloInit} />
                    ) : (
                      <CreateCategory category={state.categoryInit} />
                    )}
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                  <Grid item xs={2}>
                    <Menu />
                  </Grid>
                  <Grid item xs>
                    {dashboardmenu === "products" ? (
                      <DataProduct />
                    ) : (
                      <DataCategories />
                    )}
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Body>
    </>
  );
}

export default Dashboard;

const Body = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  box-sizing: border-box;
`;
