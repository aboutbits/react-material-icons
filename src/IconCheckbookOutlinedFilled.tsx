import React from 'react'
import { IconProps } from './types'

const IconCheckbookOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-200v-560h800v120h-80L600-440H240v80h280L360-200H80Zm160-320h240v-80H240v80Zm280 400v-70l266-266 70 70-266 266h-70Zm360-290-70-70 36-36q5-5 11-5t11 5l48 48q5 5 5 11t-5 11l-36 36Z" />
  </svg>
)

export { IconCheckbookOutlinedFilled as default }
