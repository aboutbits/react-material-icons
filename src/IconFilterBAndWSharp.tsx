import React from 'react'
import { IconProps } from './types'

const IconFilterBAndWSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3H3v18h18V3zm-2 16l-7-8v8H5l7-8V5h7v14z" />
  </svg>
)

export { IconFilterBAndWSharp as default }
