import React from 'react'
import { IconProps } from './types.js'

export const IconVentilatorSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-120q-76 0-144-24t-125-67q-11 5-24 8t-27 3q-50 0-85-35t-35-85q0-23 8-43t22-36q-11-28-18-57t-10-60l80-8q2 23 6.5 44t12.5 41q5-1 9.5-1h9.5q50 0 85 35t35 85q0 14-3 26.5t-8 24.5q37 27 80 44.5t91 22.5v-198q0-17-11.5-28.5T400-440q-66 0-113-47t-47-113q0-66 47-113t113-47h40v-80h320v80h80v80h-80v80H440v-80h-40q-33 0-56.5 23.5T320-600q0 33 23.5 56.5T400-520q50 0 85 35t35 85v198q87-10 158-57t113-120l-49-25 36-71 46 23q5-17 8.5-35t5.5-37l80 8q-2 26-8 51t-14 49l42 21-36 71-38-19q-57 101-159 162t-225 61Z" />
  </svg>
)