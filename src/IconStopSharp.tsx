import React from 'react'
import { IconProps } from './types'

const IconStopSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M6 6h12v12H6V6z" />
  </svg>
)

export { IconStopSharp as default }
