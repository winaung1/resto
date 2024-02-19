import React from 'react'

export const Button = ({name, bg, attr}) => {
  return (
    <button className={`${bg} ${attr} px-4 py-3 text-white rounded-tl-xl rounded-br-xl`}>
        {name}
    </button>
  )
}
