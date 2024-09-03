import React from 'react'
import { IconProps } from './types'

const IconPermScanWifiRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M423-177 61-539q-12-12-18-27t-6-30q0-17 7-32.5T65-656q82-71 195-107.5T480-800q107 0 220 36.5T895-656q14 12 21 27.5t7 32.5q0 15-6 30t-18 27L537-177q-12 12-27 18t-30 6q-15 0-30-6t-27-18Zm17-223q0 17 11.5 28.5T480-360q17 0 28.5-11.5T520-400v-120q0-17-11.5-28.5T480-560q-17 0-28.5 11.5T440-520v120Zm40-200q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Z" />
  </svg>
)

export { IconPermScanWifiRoundedFilled as default }
