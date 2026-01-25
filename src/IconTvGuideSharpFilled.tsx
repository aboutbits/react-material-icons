import React from 'react'
import { IconProps } from './types.js'

export const IconTvGuideSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm200-200h80v-240h70l90 240h80l120-320H660l-60 180-60-180H200v80h120v240Z" />
  </svg>
)
