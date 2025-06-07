import React from 'react'
import { IconProps } from './types.js'

export const IconGateRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-280q-17 0-28.5-11.5T80-320v-320q0-17 11.5-28.5T120-680q17 0 28.5 11.5T160-640v320q0 17-11.5 28.5T120-280Zm720 0q-17 0-28.5-11.5T800-320v-320q0-17 11.5-28.5T840-680q17 0 28.5 11.5T880-640v320q0 17-11.5 28.5T840-280Zm-640 40v-360q0-66 47-113t113-47h40q17 0 28.5 11.5T440-720v200h-40q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440h40v200q0 17-11.5 28.5T400-200H240q-17 0-28.5-11.5T200-240Zm320 0v-200h40q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520h-40v-200q0-17 11.5-28.5T560-760h40q66 0 113 47t47 113v360q0 17-11.5 28.5T720-200H560q-17 0-28.5-11.5T520-240Z" />
  </svg>
)
