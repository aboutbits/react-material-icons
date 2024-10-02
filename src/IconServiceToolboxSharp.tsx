import React from 'react'
import { IconProps } from './types'

export const IconServiceToolboxSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-720v-120h400v120h79l121 278v282H80v-282l121-278h79Zm80 0h240v-40H360v40Zm-80 240v-40h80v40h240v-40h80v40h96l-68-160H252l-68 160h96Zm0 80H160v160h640v-160H680v40h-80v-40H360v40h-80v-40Zm200-40Zm0-40Zm0 80Z" />
  </svg>
)
