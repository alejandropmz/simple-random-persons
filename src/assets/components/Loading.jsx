import React from 'react'
import loading from "../../assets/loading.gif"

export const Loading = () => {
  return (
    <div className='loading__container'>
      <img src={loading} alt="" />
      <h1>Loading...</h1>
    </div>
  )
}
