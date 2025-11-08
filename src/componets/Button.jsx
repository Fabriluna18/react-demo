import React from "react"

 export default function button({text, funcionalidad}) {
  return (
    <>
      <button onClick={() => funcionalidad()}>{text}</button>
    </>
  )
}

