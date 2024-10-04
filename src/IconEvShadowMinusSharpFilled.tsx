import React from 'react'
import { IconProps } from './types'

const IconEvShadowMinusSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 14-1 28.5t-3 28.5q-32-26-71-41.5T721-480q-100 0-171 70.5T479-239q0 45 15.5 84T536-84q-14 2-28 3t-28 1ZM160-480q0 122 79 211t196 106h1q-72-55-114-137.5T280-480q0-97 42-179.5T436-797q-118 16-197 105.5T160-480Zm400 280v-80h320v80H560Z" />
  </svg>
)

export { IconEvShadowMinusSharpFilled as default }
