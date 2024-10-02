import React from 'react'
import { IconProps } from './types'

export const IconResetTvSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-120v-80H80v-640h800v280H512l74-74-56-56-170 170 170 170 56-56-74-74h368v280H640v80H320Z" />
  </svg>
)
