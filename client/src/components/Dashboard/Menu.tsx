import React, { useState, useEffect } from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../reducer";
import { setDashboardMenu } from "../../actions";

import { getArticulosBO, getArticulos, getCategorias, Articulo, getCategoriasBO, getUsersBO, getOrdersBO } from "../../actions";


export default function TypographyMenu() {
  const dispatch = useDispatch<any>();
  const [status, setStatus] = useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [selectedIndexClient, setSelectedIndexClient] = React.useState(3);

  const user = useSelector((state: ReduxState) => state.user);
  const dashboardmenu = useSelector((state: ReduxState) => state.dashboardmenu);

  function handleChange(e: React.MouseEvent<HTMLElement>, index: number,itemMenu:string) {
      setSelectedIndex(index);
      setSelectedIndexClient(index);
      dispatch(setDashboardMenu(itemMenu));    
      if (itemMenu === "products") {
          dispatch(getCategorias());
          dispatch(
            getArticulosBO({
              page: 1,
              pageSize: 12,
              name: null,
              order: 'name',
              direction: 'asc',
              filter: null,
              categoryId: null
            })
          );      
      }
      if (itemMenu === "categories") {
        dispatch(
          getCategoriasBO({
            page: 1,
            pageSize: 12,
            name: null,
            order: "name",
            direction: "asc",
            filter: null,
          })
        );
      }
    if (itemMenu === "users") {
      dispatch(
        getUsersBO({
          page: 1,
          pageSize: 12,
          name: null,
          order: "name",
          direction: "asc",
          filter: null,
          userId: user.role === "CLIENT" ? user.id : null,
        })
      );
    }
      if (itemMenu === "orders") {
        dispatch(
          getOrdersBO({
            page: 1,
            pageSize: 12,
            name: null,
            order: "id",
            direction: "asc",
            filter: null,
            userId: user.role === "CLIENT" ? user.id : null,
          })
        );
      }
  }

  useEffect(() => {
    const menuSet = user.role === "ADMIN" ? { label: "products", index: 1 } : { label:"users",index:3};
    dispatch(setDashboardMenu(menuSet.label));
    handleChange(null, menuSet.index, menuSet.label);
  }, [
    dispatch
  ]);

  return user.role === "ADMIN" ? (
    <Paper sx={{ width: 230 }}>
      <MenuList>
        <MenuItem selected={1 === selectedIndex} onClick={(e) => handleChange(e, 1,"products")}>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Productos</Typography>
        </MenuItem>
        <MenuItem selected={2 === selectedIndex}onClick={(e) => handleChange(e, 2, "categories")}>
          <ListItemIcon>
            <PriorityHighIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Categorias</Typography>
        </MenuItem>
        <MenuItem selected={3 === selectedIndex} onClick={(e) => handleChange(e, 3, "users")}>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Usuarios
          </Typography>
        </MenuItem>
        <MenuItem selected={4 === selectedIndex} onClick={(e) => handleChange(e, 4, "orders")}>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Ordenes
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  ) : (
      <Paper sx={{ width: 230 }}>
        <MenuItem selected={3 === selectedIndexClient} onClick={(e) => handleChange(e, 3, "users")}>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Usuarios
          </Typography>
        </MenuItem>
      <MenuList>
        <MenuItem selected={1 === selectedIndexClient} onClick={(e) => handleChange(e, 1, "orders")}>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Orders
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
