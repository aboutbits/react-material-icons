import React from 'react'
import { IconProps } from './types'

const IconTransitEnterexit: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M16 18H6V8h3v4.77L15.98 6 18 8.03 11.15 15H16v3z" />
  </svg>
)

export { IconTransitEnterexit as default }
