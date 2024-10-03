import React from 'react'
import { IconProps } from './types.js'

export const IconDoorSlidingSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-440q-17 0-28.5-11.5T320-480q0-17 11.5-28.5T360-520q17 0 28.5 11.5T400-480q0 17-11.5 28.5T360-440Zm240 0q-17 0-28.5-11.5T560-480q0-17 11.5-28.5T600-520q17 0 28.5 11.5T640-480q0 17-11.5 28.5T600-440ZM120-120v-80h40v-640h640v640h40v80H120Zm120-80h200v-560H240v560Zm280 0h200v-560H520v560Zm-40-320Z" />
  </svg>
)
