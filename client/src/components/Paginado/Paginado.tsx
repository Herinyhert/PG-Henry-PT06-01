import React from 'react';
import styled from 'styled-components';


export default function Paginado({ totalCount, pageSize, onPageChange }) {
  return (
    <ContainerPage>
      {Array.from(
        { length: Math.ceil(totalCount / pageSize) },
        (e, i) => i+1
      ).map((i) => (
        
        <button key={i} onClick={() => onPageChange(i)}>
          {i}
        </button>
        
      ))}
    </ContainerPage>
  )
}

const ContainerPage = styled.div`
display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
   align-items: center;
  justify-content: center;
`;
