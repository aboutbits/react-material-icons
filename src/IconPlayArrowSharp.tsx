import React from 'react'
import { IconProps } from './types'

const IconPlayArrowSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M8 5v14l11-7L8 5z" />
  </svg>
)

export { IconPlayArrowSharp as default }
