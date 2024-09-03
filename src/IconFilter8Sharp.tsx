import React from 'react'
import { IconProps } from './types'

const IconFilter8Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-560-40 40v160h240v-160l-40-40 40-40v-160H440v160l40 40Zm120-120v80h-80v-80h80Zm0 160v80h-80v-80h80ZM240-240v-640h640v640H240Zm80-80h480v-480H320v480ZM80-80v-640h80v560h560v80H80Zm240-240v-480 480Z" />
  </svg>
)

export { IconFilter8Sharp as default }
