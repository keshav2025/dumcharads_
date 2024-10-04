import React from 'react'

export default function Button({Name=" ",Handler,defaultStyle={}}) {
  return (
    <div>
      <button onClick={Handler} style={defaultStyle}>{Name||"Submit"}</button>
     
    </div>
  )
}
