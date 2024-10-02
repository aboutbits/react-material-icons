import React from 'react'
import { IconProps } from './types'

export const IconBottomDrawerSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm80-640v330l50-50h460l50 50v-330H200Zm0 560h560v-120l-80-80H280l-80 80v120Zm0 0h560-560Z" />
  </svg>
)
