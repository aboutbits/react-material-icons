import React from 'react'
import { IconProps } from './types'

const IconLabelSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17.03 5L3 5.01v13.98l14.03.01L22 12l-4.97-7z" />
  </svg>
)

export { IconLabelSharp as default }
