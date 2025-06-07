import React from 'react'
import { IconProps } from './types.js'

export const IconHomeMaxRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-200h-80q-66 0-113-47T40-360v-240q0-66 47-113t113-47h560q66 0 113 47t47 113v240q0 66-47 113t-113 47h-80q0 17-11.5 28.5T640-160H320q-17 0-28.5-11.5T280-200Z" />
  </svg>
)
