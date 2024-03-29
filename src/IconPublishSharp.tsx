import React from 'react'
import { IconProps } from './types'

const IconPublishSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z" />
  </svg>
)

export { IconPublishSharp as default }
