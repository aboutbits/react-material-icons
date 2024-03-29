import React from 'react'
import { IconProps } from './types'

const IconCropLandscapeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 5H3v14h18V5zm-2 12H5V7h14v10z" />
  </svg>
)

export { IconCropLandscapeSharp as default }
