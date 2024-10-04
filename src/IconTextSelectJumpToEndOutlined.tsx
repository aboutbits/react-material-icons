import React from 'react'
import { IconProps } from './types.js'

export const IconTextSelectJumpToEndOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-720h80v720h-80ZM400-320l-56-56 63-64H120v-80h287l-63-64 56-56 160 160-160 160Zm40-440v-80h80v80h-80Z" />
  </svg>
)
