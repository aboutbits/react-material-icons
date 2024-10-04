import React from 'react'
import { IconProps } from './types.js'

export const IconAccountBalanceRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-320v-200q0-17 11.5-28.5T240-560q17 0 28.5 11.5T280-520v200q0 17-11.5 28.5T240-280q-17 0-28.5-11.5T200-320Zm240 0v-200q0-17 11.5-28.5T480-560q17 0 28.5 11.5T520-520v200q0 17-11.5 28.5T480-280q-17 0-28.5-11.5T440-320ZM120-120q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200h720q17 0 28.5 11.5T880-160q0 17-11.5 28.5T840-120H120Zm560-200v-200q0-17 11.5-28.5T720-560q17 0 28.5 11.5T760-520v200q0 17-11.5 28.5T720-280q-17 0-28.5-11.5T680-320Zm160-320H116q-15 0-25.5-10.5T80-676v-22q0-11 5.5-19t14.5-13l344-172q17-8 36-8t36 8l342 171q11 5 16.5 15t5.5 21v15q0 17-11.5 28.5T840-640Z" />
  </svg>
)