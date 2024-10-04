import React from 'react'
import { IconProps } from './types.js'

export const IconNetworkWifi3BarRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M423-177 61-539q-12-12-18-27t-6-30q0-17 7-32.5T65-656q82-71 195-107.5T480-800q107 0 220 36.5T895-656q14 12 21 27.5t7 32.5q0 15-6 30t-18 27L537-177q-12 12-27 18t-30 6q-15 0-30-6t-27-18ZM232-482q53-38 116-59.5T480-563q69 0 132 21.5T728-482l116-116q-78-59-170.5-90.5T480-720q-101 0-193.5 31.5T116-598l116 116Z" />
  </svg>
)