import React from 'react'
import { IconProps } from './types'

const IconFeaturedPlayListTwoTone: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 19h18V5H3v14zM5 7h9v2H5V7zm0 3h9v2H5v-2z" opacity=".3" />
    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 10h9v2H5zm0-3h9v2H5z" />
  </svg>
)

export { IconFeaturedPlayListTwoTone as default }
