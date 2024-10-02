import React from 'react'
import { IconProps } from './types'

export const IconMailOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M791-55 686-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l80 80H126l-71-71 57-57 736 736-57 57Zm80-148L575-499l225-141v-80L526-548 274-800h526q33 0 56.5 23.5T880-720v480q0 10-2 19.5t-7 17.5Z" />
  </svg>
)
