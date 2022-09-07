import React from 'react'
import { IconProps } from './types'

const IconCropSquareSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 4H4v16h16V4zm-2 14H6V6h12v12z" />
  </svg>
)

export { IconCropSquareSharp as default }
