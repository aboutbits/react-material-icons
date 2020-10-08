import React from 'react'
import { IconProps } from './types'

const IconVolumeDown: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{props.title === undefined ? 'IconVolumeDown' : props.title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" />
  </svg>
)

export { IconVolumeDown as default }
