import React from 'react'
import { IconProps } from './types'

const Icon5gMobiledataBadgeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-120v-720h880v720H40Zm80-80h720v-560H120v560Zm640-320H640v80h40v80H560v-240h200v-80H480v400h280v-240ZM200-280h240v-240H280v-80h160v-80H200v240h160v80H200v80Zm-80 80v-560 560Z" />
  </svg>
)

export { Icon5gMobiledataBadgeSharp as default }
