import React from 'react'
import { IconProps } from './types'

const IconTitleOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5 4v3h5.5v12h3V7H19V4H5z" />
  </svg>
)

export { IconTitleOutlined as default }
