import React from 'react'
import { IconProps } from './types'

const IconBiotechSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120v-80h200v-80q-83 0-141.5-58.5T200-480q0-57 29-105t80-73q-4 22 1.5 43t17.5 40q-23 16-35.5 41T280-480q0 50 35 85t85 35h320v80H520v80h240v80H200Zm360-356-12-38-38 14-20-53q20-16 31-38.5t11-48.5q0-47-33-79.5T418-752l-18-50 38-14-14-36 76-28 12 38 38-14 110 300-38 14 14 38-76 28Zm-140-92q-30 0-51-21t-21-51q0-30 21-51t51-21q30 0 51 21t21 51q0 30-21 51t-51 21Z" />
  </svg>
)

export { IconBiotechSharpFilled as default }
