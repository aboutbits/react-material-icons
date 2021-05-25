import React from 'react'
import { IconProps } from './types'

const IconVolumeMute: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M7 9v6h4l5 5V4l-5 5H7z" />
  </svg>
)

export { IconVolumeMute as default }
