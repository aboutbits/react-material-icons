import React from 'react'
import { IconProps } from './types'

const IconStayPrimaryLandscapeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M1 19h22V5H1v14zM19 7v10H5V7h14z" />
  </svg>
)

export { IconStayPrimaryLandscapeSharp as default }
