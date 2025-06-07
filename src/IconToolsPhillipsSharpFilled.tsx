import React from 'react'
import { IconProps } from './types.js'

export const IconToolsPhillipsSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-120v-80h400v80H280Zm0-120v-400l150-200h100l150 200v400H280Zm80-280 80-80v-120l-80 107v93Zm240 0v-93l-80-107v120l80 80Z" />
  </svg>
)
