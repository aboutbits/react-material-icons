import React from 'react'
import { IconProps } from './types'

const IconThumbDownSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
    <path d="M9.83 23 17 15.82V3H4.69L1 11.6V16h8.31l-1.12 5.38zM19 3h4v12h-4z" />
  </svg>
)

export { IconThumbDownSharp as default }
