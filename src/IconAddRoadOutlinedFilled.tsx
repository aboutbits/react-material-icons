import React from 'react'
import { IconProps } from './types.js'

export const IconAddRoadOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-40v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm0-400v-360h80v360h-80ZM160-160v-640h80v640h-80Zm280-480v-160h80v160h-80Zm0 240v-160h80v160h-80Zm0 240v-160h80v160h-80Z" />
  </svg>
)