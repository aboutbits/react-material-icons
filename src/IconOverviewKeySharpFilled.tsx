import React from 'react'
import { IconProps } from './types.js'

export const IconOverviewKeySharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-200v-560h560v560H40Zm640 0v-560h80v560h-80Zm160 0v-560h80v560h-80Z" />
  </svg>
)
