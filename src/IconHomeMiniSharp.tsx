import React from 'react'
import { IconProps } from './types'

export const IconHomeMiniSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-200q-116 0-198-82T80-480q0-38 18.5-86t64.5-91.5q46-43.5 123-73T480-760q117 0 194 29.5t123 73q46 43.5 64.5 91.5t18.5 86q0 116-82 198t-198 82H360Zm6-80h228q63 0 114.5-33.5T784-400H176q24 53 75.5 86.5T366-280Zm114-120Zm0-40Zm-320-40h640q0-30-16-65t-53.5-65q-37.5-30-99-50T480-680q-90 0-151 20t-98.5 50q-37.5 30-54 65T160-480Zm320 0Z" />
  </svg>
)
