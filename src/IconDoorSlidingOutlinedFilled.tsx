import React from 'react'
import { IconProps } from './types.js'

export const IconDoorSlidingOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-440q17 0 28.5-11.5T400-480q0-17-11.5-28.5T360-520q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440Zm240 0q17 0 28.5-11.5T640-480q0-17-11.5-28.5T600-520q-17 0-28.5 11.5T560-480q0 17 11.5 28.5T600-440ZM120-120v-80h40v-560q0-33 23.5-56.5T240-840h220v640h40v-640h220q33 0 56.5 23.5T800-760v560h40v80H120Z" />
  </svg>
)