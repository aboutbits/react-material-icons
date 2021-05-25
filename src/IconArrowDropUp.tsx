import React from 'react'
import { IconProps } from './types'

const IconArrowDropUp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M7 14l5-5 5 5z" />
  </svg>
)

export { IconArrowDropUp as default }
