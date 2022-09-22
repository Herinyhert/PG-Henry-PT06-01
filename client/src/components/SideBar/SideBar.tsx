import { useState, ChangeEvent } from "react";
import { TbSortAscendingLetters, TbSortAscendingNumbers, TbSortDescending2, TbSortDescendingLetters, TbSortDescendingNumbers } from "react-icons/tb";
import { ImSearch } from "react-icons/im";
import { HiOutlineFilter } from "react-icons/hi";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { ReduxState } from "../../reducer";
import React from "react";
import { defaultFilterOrder } from "../../pages/Home/Home";
import { FiFilter } from "react-icons/fi";

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
  // console.log("homeState", homeState);
  // console.log("defaultFilterOrder", defaultFilterOrder);

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
      <div>
      {JSON.stringify({
        ...homeState,
        page: defaultFilterOrder.page,
        pageSize: defaultFilterOrder.pageSize,
        name: defaultFilterOrder.name,
      }) != JSON.stringify(defaultFilterOrder) && (
        <OrderButtonReinicio
          style={{ marginTop: 20 }}
          onClick={() => {
            filterOrder(defaultFilterOrder);
            setMinMax({ priceMin: undefined, priceMax: undefined });
          }}
        >
          Reiniciar orden y filtros
         </OrderButtonReinicio>
      )}
      </div>

      <OrderContainer>
        <Legend>Artículos:</Legend>
        <H5>Orden:</H5>
        <div>
          <div>
            <OrderButton
              title="Nombre ascendente"
              onClick={() => handlerOrder("name", "asc")}
              active={
                homeState.order === "name" && homeState.direction === "asc"
              }
            >
              <TbSortAscendingLetters style={{ width: 25, height: 25 }} />
            </OrderButton>
            <OrderButton
              title="Nombre descendente"
              onClick={() => handlerOrder("name", "desc")}
              active={
                homeState.order === "name" && homeState.direction === "desc"
              }
            >
              <TbSortDescendingLetters style={{ width: 25, height: 25 }} />
            </OrderButton>
          </div>
        </div>
        <div>
          <Legend>Precio:</Legend>
          <H5>Orden:</H5>
          <div>
            <OrderButton
              title="Precio ascendente"
              onClick={() => handlerOrder("price", "asc")}
              active={
                homeState.order === "price" && homeState.direction === "asc"
              }
            >
              <TbSortAscendingNumbers style={{ width: 25, height: 25 }} />
            </OrderButton>
            <OrderButton
              title="Precio ascendente"
              onClick={() => handlerOrder("price", "desc")}
              active={
                homeState.order === "price" && homeState.direction === "desc"
              }
            >
              <TbSortDescendingNumbers style={{ width: 25, height: 25 }} />
            </OrderButton>
          </div>
        </div>
      </OrderContainer>
      <fieldset style={{ margin: 5 }}>
        {/* <Legend>Filtrar Precio:</Legend> */}
        <H5>Rango:</H5>
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
          <OrderButton
            onClick={handlerMinMaxClick}
            active={homeState.priceMin || homeState.priceMax}
          >
            <IconFilter>
            <FiFilter style={{ width: 20, height: 20 }} />
            </IconFilter>
          </OrderButton>
        </FiltraPrecio>
        <Legend>Categorias:</Legend>
        {allCategorias.map((cat, i) => (
          <Category key={i}>
            <input
              id={`${i}`}
              type="checkbox"
              onChange={(e) =>
                filterOrder(
                  homeState.categoryId === cat.id
                    ? { categoryId: "" }
                    : { categoryId: cat.id }
                )
              }
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
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* transition: width 0.2s linear; */
  padding: 4rem 0;
  margin-left: 10px;
  height: auto;
`;

const OrderButtonReinicio = styled.button<{ active?: boolean }>`
  ${({ active }) =>
    active &&
    css`
      background-color: #7daffb;
    `}
  margin: 5px 0; 
  padding: 5px 5px;
  border-radius: 5px;
  background-color: #064fbc;
  color: white;

  &:hover {
    background-color: #7daffb;
  }

  @media (max-width: 829px) {
    width: 100%;
    font-size: 12px;
  }
  @media (max-width: 600px) {
    width: 100%;
    font-size: 10px;
  }

`;

 

// const SearchBarContainer = styled.div`
//   display: flex;
//   width: 200px;
//   margin: 5px;
//   margin-top: 15px;
// `;
const Category = styled.div`
  display: flex;
  width: 200px;
  margin: 5px;

  input {
    margin-right: 5px;
  }
  

  @media (max-width: 829px) {
    width: 100%;
    font-size: 12px;
  }
  @media (max-width: 600px) {
    width: 100%;
    font-size: 10px;
  }
`;
const OrderContainer = styled.fieldset`
  width: 200px;
  margin: 5px;
`;

const OrderButton = styled.button<{ active?: boolean }>`
  ${({ active }) =>
    active &&
    css`
      background-color: #7daffb;
    `}
  margin: 5px;
  border-radius: 5px;
`;

const Legend = styled.legend`
  font-family: "Proxima Nova", -apple-system, Roboto, Arial, sans-serif,
    sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #8d99ae;

  @media (max-width: 829px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;

const FiltraPrecio = styled.div`
  display: flex;
  align-items: center;
  width: 16rem;

  @media (max-width: 829px) {
    width: 100%;
    font-size: 0.8rem;
  }
`;

const InputMinMax = styled.input`
  /* display: flex; */
  width: 3.5rem;
  height: 1.5rem;
  border-radius: 5px;

  ::placeholder {
    font-size: 0.8rem;
    padding-left: 0.3rem;
  }

  @media (max-width: 829px) {
    width: 100%;
    font-size: 0.8rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    font-size: 0.6rem;

    ::placeholder {
      font-size: 0.5rem;
      padding-left: 0.2rem;
    }
  }
`;

const H5 = styled.h5`
  font-size: 1rem;
  margin: 0;
  margin-right: 0.5rem;
`;

const IconFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 5px;
  

  &:hover {
    background-color: #7daffb;
    
  }
`;
