import React from 'react'
import { IconProps } from './types'

const IconArrowRightAltSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
  </svg>
)

export { IconArrowRightAltSharp as default }
