import React from 'react'
import { IconProps } from './types.js'

export const IconNotAccessibleOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M791-56 567-280h-87q-33 0-56.5-23.5T400-360v-87L56-791l56-57 736 736-57 56ZM400-80q-83 0-141.5-58.5T200-280q0-73 45.5-127.5T360-476v83q-35 13-57.5 43.5T280-280q0 50 35 85t85 35q39 0 70-22.5t43-57.5h83q-14 69-68.5 114.5T400-80Zm80-640q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Zm280 280q-53 0-107-23t-93-55L423-655q10-11 23-17.5t34-6.5q15 0 33 7t33 22l51 57q29 32 72.5 53t90.5 20v80Z" />
  </svg>
)
