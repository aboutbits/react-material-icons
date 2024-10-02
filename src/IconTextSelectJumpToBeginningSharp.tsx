import React from 'react'
import { IconProps } from './types'

export const IconTextSelectJumpToBeginningSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-760v-80h80v80h-80Zm0 640v-80h80v80h-80ZM600-760v-80h80v80h-80Zm0 640v-80h80v80h-80ZM440-760v-80h80v80h-80Zm-160 0v-80h80v80h-80Zm0 640v-80h80v80h-80Zm-160 0v-720h80v720h-80Zm440-200L400-480l160-160 56 56-63 64h287v80H553l63 64-56 56ZM440-120v-80h80v80h-80Z" />
  </svg>
)
