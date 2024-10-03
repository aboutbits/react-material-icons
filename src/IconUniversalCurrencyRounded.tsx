import React from 'react'
import { IconProps } from './types.js'

export const IconUniversalCurrencyRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M300-460h-70q-13 0-21.5 8.5T200-430q0 13 8.5 21.5T230-400h90q17 0 28.5-11.5T360-440v-70q0-17-11.5-28.5T320-550h-60v-30h70q13 0 21.5-8.5T360-610q0-13-8.5-21.5T330-640H230q-13 0-21.5 8.5T200-610v90q0 13 8.5 21.5T230-490h70v30Zm300 20q-72 0-116 26.5T440-342v2q0 8 6 14t14 6h280q8 0 14-6t6-14v-2q0-45-44-71.5T600-440Zm0-40q33 0 56.5-23.5T680-560q0-33-23.5-56.5T600-640q-33 0-56.5 23.5T520-560q0 33 23.5 56.5T600-480ZM160-200q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h640q33 0 56.5 23.5T880-680v400q0 33-23.5 56.5T800-200H160Zm0-80h640v-400H160v400Zm0 0v-400 400Z" />
  </svg>
)
