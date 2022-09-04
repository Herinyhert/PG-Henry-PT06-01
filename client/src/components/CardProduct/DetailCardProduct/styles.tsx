import styled from 'styled-components';

export const Container = styled.div`
  width: 1024px;
  height: 1024px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  margin-top: 12px;
  border:1px solid #D0D2D1;
  border-radius:5px;
  background-color:white;
`;

export const Panel = styled.div`
  /* background-color: #8e8d8d; */
  display: grid;
  grid-template-columns: 67fr 33fr;
`;

export const Column = styled.div``;

export const Galeria = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 530px;

  > img {
    height: 75%;
  }
`;

export const Description = styled.div`
  border-top:1px solid #D0D2D1;
  width: 88%;
  padding: 10px 0;
`;

export const Section = styled.div`
padding: 32px 16px;
margin: 0 16px ;
border:1px solid #D0D2D1;

>h5{
   font-size:25px;
   margin-bottom:28px;
   color:#737373;
   line-height:22.5px;
}

>div{
    display:flex;
    flex-direction:column;
    line-height:18.9px;
    

>span + span{
  margin-top:24px; 
}
.title{
    font-size:16px;
    line-height:21.6px; 
}
.description{
   font-size:12px;
   color:gray;
   margin-top:10px;
}
.conoce__mas{
    color:blue;
    margin-top:20px;
}
}
`
/* informacion renderizada del producto */
 export const Producto=styled.div`
 display:flex;
 flex-direction:column;
 padding: 32px 20px;
 margin:16px;
 border:1px solid #D0D2D1;
 border-radius:5px;
 `
 export const Estado=styled.div`
 font-size:14px;
 margin-bottom:10px;
 color: #737373;
 `
 export const Name=styled.div`
 >h1{
    color :#222423;
    width:100%;
    line-height:25.9px;
    font-weight:500;
    
 }
 `
 export const Price=styled.div`
 font-size:36px;
 line-height:36px;
 padding:24px;
 font-weight:inherit;
 color:#222423; 
 margin-left:30px;
 `
export const  CardEnvio=styled.div`
display:flex;
margin-bottom:1rem;
>div{
    margin-left:4px;
    color:red;
    .title{
        color:#222423;
        font-size:20px;
        font-weight:600;
    }
    .detalle p{
        font-size:14px;
        color: #737373;
    }

} 
`
 export const CheckIcon=styled.div``
 export const Stock=styled.div`
  display:flex;
  flex-direction:row;
 >p{
   margin-right:5px;
  }
 `
 export const ButtonComprar=styled.div`
 margin-top:16px;

 `
 export const ButtonCarrito=styled.div`
 margin-top:16px;

 `

 export const Button=styled.button`
 font-size:15px;
 border:none;
 box-shadow: -10px 20px 15px -10px rgba(1, 2, 3, 0.2);
 border-radius:4px;
 padding:12px;
 outline:0;
 cursor: pointer;
 background-color:#7DAFFB;
 width:50vh;
 color:white;
 &.comprar{
    background-color:#3483F9;

    &:hover{
        background-color:#064FBC;
        cursor: pointer;
     }}

 &:hover{
    background-color:#064FBC;
    cursor: pointer;
 }


 `

export const MetodoPago = styled.div`
margin:0 auto;


>h1{
    color:#B4B4B5;
}
>img{
    width:85%
}

`
export const Categoria = styled.div`

`
