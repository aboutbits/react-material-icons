import React from 'react'
import { IconProps } from './types'

export const Icon3gMobiledataBadgeSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-120v-720h880v720H40Zm80-80h720v-560H120v560Zm0 0v-560 560Zm360-80h280v-240H640v80h40v80H560v-240h200v-80H480v400Zm-280 0h240v-160l-40-40 40-40v-160H200v80h160v80H200v80h160v80H200v80Z" />
  </svg>
)
