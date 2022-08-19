import React from 'react'
import "../Edit/Edit.css"
import "../Posts/post.css"

const Input = ({ label, data, setData, inputType, classStyle }) => {
  return (
    <>
      <label>{label}</label>
      {inputType === 'textarea' ?
        <textarea className={classStyle} placeholder={data} type="text" onChange={(e) => setData(e.target.value)} />
        :
        <input type="text" placeholder={data} onChange={(e) => setData(e.target.value)} />}
    </>
  )
}

export default Input