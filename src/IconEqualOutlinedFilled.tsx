import React from 'react'
import { IconProps } from './types.js'

export const IconEqualOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-280v-120h640v120H160Zm0-280v-120h640v120H160Z" />
  </svg>
)
