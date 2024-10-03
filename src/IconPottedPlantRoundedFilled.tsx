import React from 'react'
import { IconProps } from './types.js'

export const IconPottedPlantRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M342-80q-28 0-49-17t-28-44l-45-179h520l-45 179q-7 27-28 44t-49 17H342Zm138-560q0-90 61-156t152-80q5-1 9 1t8 5q4 3 5.5 7.5t.5 9.5q-11 79-64.5 137.5T520-644v84h280q17 0 28.5 11.5T840-520v80q0 33-23.5 56.5T760-360H200q-33 0-56.5-23.5T120-440v-80q0-17 11.5-28.5T160-560h280v-84q-78-13-131.5-71.5T244-853q-1-5 .5-9.5t5.5-7.5q4-3 8-5t9-1q91 14 152 80t61 156Z" />
  </svg>
)
