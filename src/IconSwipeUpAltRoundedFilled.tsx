import React from 'react'
import { IconProps } from './types.js'

export const IconSwipeUpAltRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-160q-83 0-141.5-58.5T280-360q0-73 45.5-127.5T440-556v-171l-36 36q-11 11-27.5 11T348-692q-11-11-11-28t11-28l104-104q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l104 104q11 11 11 27.5T612-692q-12 12-28.5 12T555-692l-35-35v171q69 14 114.5 68.5T680-360q0 83-58.5 141.5T480-160Z" />
  </svg>
)