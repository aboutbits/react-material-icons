import React from 'react'
import { IconProps } from './types.js'

export const IconPrintConnectRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m718-266 113-113q11-11 27.5-11t28.5 11q12 12 12 28.5T887-322L746-181q-12 12-28 12t-28-12l-57-57q-12-12-12-28t12-28q12-11 28-11t28 11l29 28ZM320-120q-33 0-56.5-23.5T240-200v-80h-80q-33 0-56.5-23.5T80-360v-160q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520q0 11-8.5 16.5t-18.5.5q-21-8-44-12.5t-46-4.5q-72 0-132 38t-92 102q-5 9-13 14.5t-18 5.5H320v160h204q17 0 28.5 11.5T564-160q0 17-11.5 28.5T524-120H320Zm-40-560q-17 0-28.5-11.5T240-720v-40q0-33 23.5-56.5T320-840h320q33 0 56.5 23.5T720-760v40q0 17-11.5 28.5T680-680H280Z" />
  </svg>
)
