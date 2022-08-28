import React from 'react';


export default function Paginado({ totalCount, pageSize, onPageChange }) {
  return (
    <div>
      {Array.from(
        { length: Math.ceil(totalCount / pageSize) },
        (e, i) => i
      ).map((i) => (
        <button key={i} onClick={() => onPageChange(i)}>
          {i}
        </button>
      ))}
    </div>
  )
}
