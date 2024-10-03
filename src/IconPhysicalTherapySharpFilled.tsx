import React from 'react'
import { IconProps } from './types.js'

export const IconPhysicalTherapySharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-280H375q-23 0-37.5 14T320-234q-3 18 5.5 35t30.5 25l229 91q10 4 19.5 2.5T622-87q8-5 13-13.5t5-19.5v-160ZM400-880q66 0 113 47t47 113q0 66-47 113t-113 47q-66 0-113-47t-47-113q0-66 47-113t113-47Zm369 360q29 0 50 19.5t21 48.5q0 23-13 42t-35 27l-72 23H375q-57 0-96 39t-39 96q0 18 5 34.5t13 30.5H120v-160q0-83 58.5-141.5T320-520h449Z" />
  </svg>
)
