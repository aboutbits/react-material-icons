import React from 'react'
import { IconProps } from './types'

const IconCallMadeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" />
  </svg>
)

export { IconCallMadeSharp as default }
