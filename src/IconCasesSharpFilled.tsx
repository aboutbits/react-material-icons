import React from 'react'
import { IconProps } from './types'

export const IconCasesSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-80v-520h80v440h680v80H40Zm160-160v-520h200v-160h320v160h200v520H200Zm280-520h160v-80H480v80Z" />
  </svg>
)
