import React from 'react'
import { IconProps } from './types'

const IconFilter8SharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Zm400-480-40 40v160h240v-160l-40-40 40-40v-160H440v160l40 40Zm120-120v80h-80v-80h80Zm0 160v80h-80v-80h80Z" />
  </svg>
)

export { IconFilter8SharpFilled as default }
