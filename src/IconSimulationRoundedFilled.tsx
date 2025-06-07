import React from 'react'
import { IconProps } from './types.js'

export const IconSimulationRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-400q72 0 116 26.5t44 70.5q0 10-6.5 16.5T617-280H343q-10 0-16.5-6.5T320-303q0-44 44-70.5T480-400Zm0-40q-33 0-56.5-23.5T400-520q0-33 23.5-56.5T480-600q33 0 56.5 23.5T560-520q0 33-23.5 56.5T480-440ZM40-280v-400q0-57 113.5-88T480-799q213 0 326.5 31T920-680v400q0 39-45 69t-129 47q-26 5-46-12.5T680-220v-354q0-26 17-46.5t43-25.5q31-7 53.5-14.5T827-676q-43-17-147-30.5T480-720q-96 0-200 13.5T133-676q11 8 33.5 16t53.5 15q26 6 43 25.5t17 45.5v354q0 26-20 43.5T214-164q-84-17-129-47t-45-69Z" />
  </svg>
)
