import React from 'react'
import { IconProps } from './types.js'

export const IconInfraredOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m636-84-57-57q66-66 103.5-152.5T720-480q0-100-37.5-186.5T579-819l57-57q76 76 120 177.5T800-480q0 117-44 218.5T636-84ZM523-197l-57-57q44-44 69-102t25-124q0-66-25-124t-69-102l57-57q54 54 85.5 127T640-480q0 83-31.5 156T523-197ZM410-310l-57-57q22-22 34.5-51t12.5-62q0-33-12.5-62T353-593l57-57q32 32 51 76t19 94q0 50-19 94t-51 76ZM160-160v-640h80v240q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400v240h-80Z" />
  </svg>
)