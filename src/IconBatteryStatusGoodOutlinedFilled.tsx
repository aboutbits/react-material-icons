import React from 'react'
import { IconProps } from './types.js'

export const IconBatteryStatusGoodOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M638-113 524-226l57-56 57 56 141-141 57 56-198 198ZM320-80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-80h160v80h80q17 0 28.5 11.5T680-760v280q-8 0-16 .5t-16 1.5q-88 12-148 79t-60 159q0 45 16 86t45 74H320Z" />
  </svg>
)
