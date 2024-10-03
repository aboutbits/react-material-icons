import React from 'react'
import { IconProps } from './types.js'

export const IconLocalPoliceRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-420 85 65q6 5 12 .5t4-11.5l-33-106 89-70q5-5 3-11.5t-9-6.5H524l-34-107q-2-7-10-7t-10 7l-34 107H329q-7 0-9.5 6.5T322-542l88 70-33 107q-2 7 4 11.5t12-.5l87-66Zm0 336q-7 0-13-1t-12-3q-135-45-215-166.5T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 140-80 261.5T505-88q-6 2-12 3t-13 1Z" />
  </svg>
)
