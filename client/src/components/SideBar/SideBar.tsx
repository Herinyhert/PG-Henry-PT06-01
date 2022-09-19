import { useState, ChangeEvent } from "react";
import { TbSortAscendingLetters, TbSortAscendingNumbers, TbSortDescending2, TbSortDescendingLetters, TbSortDescendingNumbers } from "react-icons/tb";
import { ImSearch } from "react-icons/im";
import { HiOutlineFilter } from "react-icons/hi";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { ReduxState } from "../../reducer";
import React from "react";

export interface SideBarProps {
  filterOrder: Function;
  homeState: {
    order;
    direction;
    categoryId;
    priceMin;
    priceMax;
  };
}

export default function SideBar({ homeState, filterOrder }: SideBarProps) {
  // const [searchName, setSearchName] = useState("");
  const [minMax, setMinMax] = useState({ priceMin: undefined, priceMax: undefined });
  const allCategorias = useSelector((state: ReduxState) => state.categorias);

  const handlerOrder = (order, direction) => {
    if (homeState.order === order && homeState.direction === direction) {
      filterOrder({
        order: "name",
        direction: "asc",
      });
    } else {
      filterOrder({
        order,
        direction,
      });
    }
  };
  const handlerMinMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (!value) {
      return setMinMax({ ...minMax, [name]: undefined });
    }
    let val = Number(value);
    if (!isFinite(val)) return;
    if (val < 0) val = 0;
    if (name !== "priceMin" && name !== "priceMax") return;
    const newMinMax = { ...minMax, [name]: val };
    if (newMinMax.priceMin !== undefined && newMinMax.priceMax !== undefined && newMinMax.priceMax < newMinMax.priceMin) {
      if (name === "priceMin") newMinMax.priceMin = newMinMax.priceMax;
      if (name === "priceMax") newMinMax.priceMax = newMinMax.priceMin;
    }
    setMinMax(newMinMax);
  };
  const handlerMinMaxClick = () => {
    if (homeState.priceMin === minMax.priceMin && homeState.priceMax === minMax.priceMax) {
      return filterOrder({ priceMin: undefined, priceMax: undefined });
    }
    filterOrder(minMax);
  };

  return (
    <SideBarContainer>
      {/* <SearchBarContainer>
        <input
          placeholder="Buscar"
          autoFocus
          onChange={(e) => setSearchName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              filterOrder({ name: searchName });
            }
          }}
        />
        <button onClick={() => filterOrder({ name: searchName })}>
          <ImSearch />
        </button>
      </SearchBarContainer> */}
      <OrderContainer>
        <Legend>Orden:</Legend>
        <div>
          <div>
            <OrderButton
              title="Nombre ascendente"
              onClick={() => handlerOrder("name", "asc")}
              active={homeState.order === "name" && homeState.direction === "asc"}>
              <TbSortAscendingLetters style={{ width: 30, height: 30 }} />
            </OrderButton>
            <OrderButton
              title="Nombre descendente"
              onClick={() => handlerOrder("name", "desc")}
              active={homeState.order === "name" && homeState.direction === "desc"}>
              <TbSortDescendingLetters style={{ width: 30, height: 30 }} />
            </OrderButton>
          </div>
        </div>
        <div>
          <div>
            <OrderButton
              title="Precio ascendente"
              onClick={() => handlerOrder("price", "asc")}
              active={homeState.order === "price" && homeState.direction === "asc"}>
              <TbSortAscendingNumbers style={{ width: 30, height: 30 }} />
            </OrderButton>
            <OrderButton
              title="Precio ascendente"
              onClick={() => handlerOrder("price", "desc")}
              active={homeState.order === "price" && homeState.direction === "desc"}>
              <TbSortDescendingNumbers style={{ width: 30, height: 30 }} />
            </OrderButton>
          </div>
        </div>
      </OrderContainer>
      <fieldset style={{ margin: 5 }}>
        <Legend>Filtrar Precio:</Legend>
        <FiltraPrecio>
          <InputMinMax
            type={"number"}
            placeholder="MIN"
            name="priceMin"
            onChange={handlerMinMaxChange}
            value={minMax.priceMin === undefined ? "" : minMax.priceMin}
          />
          {" < "}
          <InputMinMax
            type={"number"}
            placeholder="MAX"
            name="priceMax"
            onChange={handlerMinMaxChange}
            value={minMax.priceMax === undefined ? "" : minMax.priceMax}
          />
          <OrderButton onClick={handlerMinMaxClick} active={homeState.priceMin || homeState.priceMax}>
            <HiOutlineFilter style={{ width: 30, height: 30 }} />
          </OrderButton>
        </FiltraPrecio>
        <Legend>Categorias:</Legend>
        {allCategorias.map((cat, i) => (
          <Category key={i}>
            <input
              id={`${i}`}
              type="checkbox"
              onChange={(e) => filterOrder(homeState.categoryId === cat.id ? { categoryId: "" } : { categoryId: cat.id })}
              checked={homeState.categoryId === cat.id}
            />
            <label htmlFor={`${i}`}>{cat.name}</label>
          </Category>
        ))}
      </fieldset>
    </SideBarContainer>
  );
}
const SideBarContainer = styled.div`
  /* background-color: rgb(235, 235, 335); */
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  /* width: 15px; */
  overflow: hidden;
  transition: width 0.2s linear;
  /* border-radius: 0.3rem; */
  /* border: 0.13rem solid black; */
  /* &:hover {
    width: 215px;
    box-shadow: 50px 50px 100vw 0 #000000;
  } */
  margin-left: 10px;
  /*  */
  //   width: auto;
  //   height: 2rem;
  /*  */
  //   padding: 0.313rem;
  //   margin: 0.3rem;
  //   /* margin: 0.625rem 0 -1.25rem 0; */
  //   -webkit-appearance: none;
  //   cursor: pointer;
  //   -webkit-transition: all 150ms ease-in-out;
  //   transition: all 150ms ease-in-out;
  //   border: none;
  //   position: relative;
  //   color: #f0f0f1;
  //   z-index: 0;
`;
const SearchBarContainer = styled.div`
  display: flex;
  width: 200px;
  margin: 5px;
  margin-top: 15px;
`;
const Category = styled.div`
  display: flex;
  width: 200px;
`;
const OrderContainer = styled.fieldset`
  width: 200px;
  margin: 5px;
`;
const OrderButton = styled.button<{ active?: boolean }>`
  ${({ active }) =>
    active &&
    css`
      background-color: lightblue;
    `}
  margin: 5px;
`;

const Legend = styled.legend`
  font-family: "Proxima Nova", -apple-system, Roboto, Arial, sans-serif, sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin-top: 1rem;
`;

const FiltraPrecio = styled.div`
  display: flex;
  align-items: center;
  width: 16rem;
`;

const InputMinMax = styled.input`
  /* display: flex; */
  width: 4rem;
  height: 2rem;
`;
