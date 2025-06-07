import React from 'react'
import { IconProps } from './types.js'

export const IconLocalCafeSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120v-80h640v80H160Zm0-160v-560h720v280H720v280H160Zm560-360h80v-120h-80v120Z" />
  </svg>
)
