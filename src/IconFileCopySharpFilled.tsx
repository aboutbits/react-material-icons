import React from 'react'
import { IconProps } from './types'

export const IconFileCopySharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-200v-720h360l240 240v480H240Zm320-440h200L560-840v200ZM80-40v-640h80v560h440v80H80Z" />
  </svg>
)
