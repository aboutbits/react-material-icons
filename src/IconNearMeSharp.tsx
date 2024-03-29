import React from 'react'
import { IconProps } from './types'

const IconNearMeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
  </svg>
)

export { IconNearMeSharp as default }
