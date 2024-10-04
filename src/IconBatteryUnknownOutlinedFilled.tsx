import React from 'react'
import { IconProps } from './types.js'

export const IconBatteryUnknownOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M656-182q0-14 .5-27.5T664-235q10-17 25.5-29t26.5-28q3-4 7-23 0-17-13-28t-30-11q-17 0-30 11t-18 28l-44-19q10-30 35-48t57-18q37 0 64.5 24t27.5 60q0 11-3 20.5t-9 17.5q-11 16-26 28.5T710-220q-6 11-6 38h-48Zm24 102q-14 0-24-9.5T646-113q0-14 10-24t24-10q14 0 23.5 10t9.5 24q0 14-9.5 23.5T680-80Zm-360 0q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-80h160v80h80q17 0 28.5 11.5T680-760v280q-100 1-170 70.5T440-240q0 46 16 87t45 73H320Z" />
  </svg>
)