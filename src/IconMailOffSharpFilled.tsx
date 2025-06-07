import React from 'react'
import { IconProps } from './types.js'

export const IconMailOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M791-55 686-160H80v-640h80l80 80H126l-71-71 57-57 736 736-57 57Zm89-139L575-499l225-141v-80L526-548 274-800h606v606Z" />
  </svg>
)
