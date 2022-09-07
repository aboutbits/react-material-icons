import React from 'react'
import { IconProps } from './types'

const IconVideoLabelSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M23 3H1v18h22V3zm-2 13H3V5h18v11z" />
  </svg>
)

export { IconVideoLabelSharp as default }
