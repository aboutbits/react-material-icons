import React from 'react'
import { IconProps } from './types'

const IconSmartphoneSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5 1v22h14V1H5zm12 18H7V5h10v14z" />
  </svg>
)

export { IconSmartphoneSharp as default }
