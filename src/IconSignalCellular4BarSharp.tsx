import React from 'react'
import { IconProps } from './types'

const IconSignalCellular4BarSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M2 22h20V2L2 22z" />
  </svg>
)

export { IconSignalCellular4BarSharp as default }
