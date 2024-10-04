import React from 'react'
import { IconProps } from './types'

const IconCasesSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-80v-520h80v440h680v80H40Zm160-160v-520h200v-160h320v160h200v520H200Zm280-520h160v-80H480v80ZM280-320h560v-360H280v360Zm0-360v360-360Z" />
  </svg>
)

export { IconCasesSharp as default }
