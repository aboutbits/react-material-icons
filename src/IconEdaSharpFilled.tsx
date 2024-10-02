import React from 'react'
import { IconProps } from './types'

export const IconEdaSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-40v-280h218l136 181 247-247 94-57 106 79L597-40H120Zm160-440v-400h80v400h80v-440h80v440h80v-360h80v383L482-261 378-400H120v-400h80v320h80Z" />
  </svg>
)
