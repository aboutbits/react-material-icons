import React from 'react'
import { IconProps } from './types'

const IconComputerSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 18l2-2V4H2v12l2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
  </svg>
)

export { IconComputerSharp as default }
