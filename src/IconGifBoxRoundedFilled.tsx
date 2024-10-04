import React from 'react'
import { IconProps } from './types.js'

export const IconGifBoxRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm140-280h40q17 0 28.5-11.5T420-440v-20q0-8-6-14t-14-6q-8 0-14 6t-6 14v20h-40v-80h60q8 0 14-6t6-14q0-8-6-14t-14-6h-60q-17 0-28.5 11.5T300-520v80q0 17 11.5 28.5T340-400Zm140 0q8 0 14-6t6-14v-120q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6Zm80 0q8 0 14-6t6-14v-40h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40v-20h60q8 0 14-6t6-14q0-8-6-14t-14-6h-80q-8 0-14 6t-6 14v120q0 8 6 14t14 6Z" />
  </svg>
)