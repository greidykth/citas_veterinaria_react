import React from 'react'

function Error ({mensaje}) {
  return (
    <div className="bg-red-600 text-white text-center uppercase p-2">
        <p>{mensaje}</p>
    </div>
  )
}

export default Error
