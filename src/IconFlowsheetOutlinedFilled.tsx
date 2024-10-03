import React from 'react'
import { IconProps } from './types.js'

export const IconFlowsheetOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-520h200v-80H240v80Zm-80 360q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q26 0 47 15.5t29 39.5q-17-8-36.5-11.5T800-760q-83 0-141.5 58.5T600-560q0 22 4 42t12 38H440v40H240v80h200v40q-38 27-59 68.5T360-160H160Zm400 40q17 0 28.5-11.5T600-160q0-17-11.5-28.5T560-200q-17 0-28.5 11.5T520-160q0 17 11.5 28.5T560-120Zm240-400q17 0 28.5-11.5T840-560q0-17-11.5-28.5T800-600q-17 0-28.5 11.5T760-560q0 17 11.5 28.5T800-520ZM560-40q-50 0-85-35t-35-85q0-39 22.5-70t57.5-43v-127h240v-47q-35-12-57.5-43T680-560q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T840-447v127H600v47q35 12 57.5 43t22.5 70q0 50-35 85t-85 35Z" />
  </svg>
)
