import React from 'react'
import { IconProps } from './types'

export const Icon3gMobiledataBadgeSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-280h280v-240H640v80h40v80H560v-240h200v-80H480v400Zm-280 0h240v-160l-40-40 40-40v-160H200v80h160v80H200v80h160v80H200v80ZM40-120v-720h880v720H40Z" />
  </svg>
)
