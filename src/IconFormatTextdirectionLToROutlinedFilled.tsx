import React from 'react'
import { IconProps } from './types.js'

export const IconFormatTextdirectionLToROutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-360v-200q-66 0-113-47t-47-113q0-66 47-113t113-47h320v80h-80v440h-80v-440h-80v440h-80ZM680-80l-56-56 64-64H120v-80h568l-64-64 56-56 160 160L680-80Z" />
  </svg>
)