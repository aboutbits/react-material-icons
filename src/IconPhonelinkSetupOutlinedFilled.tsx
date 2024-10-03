import React from 'react'
import { IconProps } from './types.js'

export const IconPhonelinkSetupOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v160h-80v-40H280v480h400v-40h80v160q0 33-23.5 56.5T680-40H280Zm400-280-6-50q-8-3-14-6.5t-12-9.5l-46 20-40-70 40-30q-2-8-2-15t2-15l-40-30 42-68 44 18q6-5 12-8t14-6l6-50h80l6 50q8 3 14 6t12 8l44-18 42 68-40 30q2 8 2 15t-2 15l40 30-40 70-46-20q-6 6-12 9.5t-14 6.5l-6 50h-80Zm40-100q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Z" />
  </svg>
)
