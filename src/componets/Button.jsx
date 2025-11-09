import React from "react"

 export default function button({text, funcionalidad}) {
  return (
    <>
      <button 
          onClick={() => funcionalidad()} 
          style={{ backgroundColor: "orange", color: "white", border: "none", padding: "8px 16px", borderRadius: "5px", cursor: "pointer", margin:"5px" }}
          >
          {text}
      </button>
    </>
  )
}

