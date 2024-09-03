import React from 'react'
import { IconProps } from './types'

const IconLocationAwaySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M343-470ZM80-120v-480l320-240 215 162q-25 3-47 11.5T526-644l-126-96-240 180v360h160v80H80Zm320 0v-76q0-21 10.5-39.5T439-265q46-27 96.5-41T640-320q54 0 104.5 14t96.5 41q18 11 28.5 29.5T880-196v76H400Zm86-80h308q-35-20-74-30t-80-10q-41 0-80 10t-74 30Zm154-160q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520q-17 0-28.5 11.5T600-480q0 17 11.5 28.5T640-440Zm0 240Z" />
  </svg>
)

export { IconLocationAwaySharp as default }