import React from 'react';
import styled from 'styled-components';


export default function Paginado({ totalCount, pageSize, onPageChange }) {
  return (
    <ContainerPage>
      {Array.from(
        { length: Math.ceil(totalCount / pageSize) },
        (e, i) => i+1
      ).map((i) => (
        
        <Butonpage key={i} onClick={() => onPageChange(i)}>
          {i}
        </Butonpage>
        
      ))}
    </ContainerPage>
  )
}

const Butonpage = styled.button`
cursor: pointer;
border: 1px solid;
background:transparent;
padding: 0.4rem;
border-radius: 2px;
margin: 2px;

&:hover,
  &:focus {
    box-shadow: 0 0 10px 0 #335d90 inset, 0 0 10px 4px #335d90;
    background-color: white;
    color: #335d90;
  }
  &:active {
    box-shadow: 0 0 10px 0 #335d90 inset, 0 0 10px 4px #335d90;
  }

`;

const ContainerPage = styled.div`

width: 90vw;
display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
   align-items: center;
  justify-content: center;

  
`;
