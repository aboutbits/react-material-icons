import React from 'react'
import { IconProps } from './types.js'

export const IconElectricMeterRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-122v-60q-106-37-173-129.5T120-522q0-75 28.5-140.5t77-114q48.5-48.5 114-77T479-882q74 0 140 28.5t115 77q49 48.5 77.5 114T840-522q0 118-67.5 209.5T600-183v61q0 17-11.5 28.5T560-82q-17 0-28.5-11.5T520-122v-42q-10 2-20 2h-21q-10 0-19.5-.5T440-164v42q0 17-11.5 28.5T400-82q-17 0-28.5-11.5T360-122Zm0-478h240q17 0 28.5-11.5T640-640q0-17-11.5-28.5T600-680H360q-17 0-28.5 11.5T320-640q0 17 11.5 28.5T360-600Zm80 210-20 20q-13 13-13 30t13 30q13 13 30 13t30-13l62-62q12-12 12-28t-12-28l-22-22 20-20q13-13 13-30t-13-30q-13-13-30-13t-30 13l-62 62q-12 12-12 28t12 28l22 22Z" />
  </svg>
)
