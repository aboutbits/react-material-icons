import React from 'react'
import { IconProps } from './types'

const IconBookmarkSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 3H5v18l7-3 7 3V3z" />
  </svg>
)

export { IconBookmarkSharp as default }
