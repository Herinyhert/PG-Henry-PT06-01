import styled from "styled-components";

export const Container = styled.div`
  width: 1024px;
  height: auto;
  display: flex;
  margin: 6rem auto 1.563rem auto;
  flex-direction: column;
  /* margin-top: 3rem; */
  border: 1px solid #d0d2d1;
  border-radius: 5px;
  background-color: white;
  padding: 35px;
`;

// export const Panel= styled.div`
//  display: grid;
//   grid-template-columns: 67fr 33fr;
// `;

export const Column = styled.div``;

export const DivTitulo = styled.div`
  border-bottom: 1px solid black;
  /* padding: 15px; */

  >h3{
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
`;

export const DivProduct = styled.div`
  border-bottom: 1px solid #d0d2d1;
  padding: 25px;
`;

export const DivNombreColumnas = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 0px;
  /* justify-content: center; */
  align-items: center;
  margin-bottom: 2px;

  >h5{
    justify-self: center;
    text-align: center;
  }
`;

export const DivUnidad = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 0px;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 1rem;
  }
`;

export const Cantidad = styled.input`
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;
  overflow: hidden;
  vertical-align: top;
  display: inline-block;
  padding: 10px;
  border: 1px solid #e6e6e6;
  width: 30px;
`;

export const Unidad = styled.div`
text-align: right;
`;

export const Decision = styled.div`
  display: flex;
  /* justify-content: space-between; */
  margin-right: 10px;
`;

export const DivResumen = styled.div`
  width: 500px;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0px 0px 400px;
`;

export const ButtonComprar = styled.button`
  border: none;
  background: inherit;
  margin: 25px 100px 0px 0px;
`;

export const ButtonDelete = styled.button`
  border: none;
  background: inherit;
  margin: 1rem;
  font-size: 1.5rem;
  &:hover {
    color: #116cf3;
  }
`;

export const ButtonCantidad = styled.button`
  border: none;
  background: inherit;
  margin: 1rem;
  font-weight: 900;
  font-size: 1rem;
  color: black;
  &:hover {
    color: #8c8c8c;
  
  }
`;
export const ContainerCantidad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  width: fit-content;
  height: 2rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  display: inline-flex;
  border: 1px solid #b8b4b4;
  border-radius: 3px;
  margin-left: 1rem;

  >h4{
    margin-top: 5px;
      font-size: 1rem;
      color: black;
    }
`;

export const ButtonCompra = styled.button`
  margin-right: 1rem;
  margin-top: 1rem;
  text-align: center;
  border: none;
  color:#ffffff;
  text-decoration: none;
`;

export const ButtonResultadoCompra = styled.button`
  margin-right: 1rem;
  text-align: center;
  border: none;
`;

export const Button = styled.button`
  display: inline-block;
  width: auto;
  min-width: 142px;
  color: #ffffff;
  background: #064fbc;
  padding: 13px 32px 12px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  
  > a {
    color: #ffffff;
    text-decoration: none;
  }

  &:hover {
    background: #7daffb;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin-right: 70px; */
  /* margin-left: 25% */
  margin-top: 10px;
  margin-bottom: 40px;
  font-family: Proxima Nova, -apple-system, Helvetica Neue, Helvetica, Roboto,
    Arial, sans-serif;
  font-size: 26px;
`;

export const Precio = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 90px;
  /* margin-right: 30px; */
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;

  font-family: Proxima Nova, -apple-system, Helvetica Neue, Helvetica, Roboto,
    Arial, sans-serif;
  font-size: 26px;
`;
