import React from 'react'
import { IconProps } from './types'

export const IconDeployedCodeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM120-275v-410l360-207 360 207v410L480-68 120-275Zm360-205Z" />
  </svg>
)
