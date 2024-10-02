import React from 'react'
import { IconProps } from './types'

export const IconSwitchSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-280h320v-400H320v400Zm80-80v-240h160v240H400Zm40-120h80v-80h-80v80ZM120-120v-720h720v720H120Z" />
  </svg>
)
