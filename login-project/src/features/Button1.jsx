import React from 'react'
import {styled} from 'styled-components'

const Button = styled.button`
    display: inline-block;
    margin: 5px;
    padding: 5px 7px;
    border-radius: 3px;
    background-color: ${props=>props.bgcolor};
    color: white;
    border: none;
`

export default function Button1({children, ...rest}) {
  return (
    <Button className={""} {...rest}>{children}</Button>
  )
}
