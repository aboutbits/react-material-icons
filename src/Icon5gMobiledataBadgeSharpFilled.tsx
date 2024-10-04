import React from 'react'
import { IconProps } from './types.js'

export const Icon5gMobiledataBadgeSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-120v-720h880v720H40Zm720-400H640v80h40v80H560v-240h200v-80H480v400h280v-240ZM200-280h240v-240H280v-80h160v-80H200v240h160v80H200v80Z" />
  </svg>
)