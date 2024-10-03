import React from 'react'
import { IconProps } from './types.js'

export const IconGasMeterRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-80q-66 0-113-47t-47-113v-400q0-66 47-113t113-47h40v-40q0-17 11.5-28.5T400-880q17 0 28.5 11.5T440-840v40h80v-40q0-17 11.5-28.5T560-880q17 0 28.5 11.5T600-840v40h40q66 0 113 47t47 113v400q0 66-47 113T640-80H320Zm40-480h240q17 0 28.5-11.5T640-600q0-17-11.5-28.5T600-640H360q-17 0-28.5 11.5T320-600q0 17 11.5 28.5T360-560Zm120 320q42 0 71-28.5t29-69.5q0-17-4-29t-15-28l-58-68q-9-11-23-11t-23 11l-58 69q-11 16-15 27.5t-4 28.5q0 41 29 69.5t71 28.5Z" />
  </svg>
)
