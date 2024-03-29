import React from 'react'
import { IconProps } from './types'

const IconClearAllTwoTone: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5 11h14v2H5zm-2 4h14v2H3zm4-8h14v2H7z" />
  </svg>
)

export { IconClearAllTwoTone as default }
