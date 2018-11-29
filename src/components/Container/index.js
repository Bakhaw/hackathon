import React, { Component } from 'react'

function Container({children, title}) {
    return (
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    )
}

export default Container;