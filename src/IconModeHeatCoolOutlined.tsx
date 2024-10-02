import React from 'react'
import { IconProps } from './types'

export const IconModeHeatCoolOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M277-285q-69-26-113-86.5T120-510q0-79 37.5-140.5T240-754q45-42 82.5-64l37.5-22v99q0 25 18 42.5t43 17.5q14 0 26-6t20-17l13-16q38 22 65 54t41 72l-67 67q-2-24-11.5-47T482-616q-14 8-29.5 11.5T421-601q-44 0-79.5-24.5T290-691q-38 37-64 82.5T200-510q0 31 11 58.5t30 48.5q2-20 11.5-37.5T276-472l84-84 86 84q2 2 4 5t4 5l-57 57q-2-3-3.5-5t-3.5-4l-30-29-28 28q-5 5-8.5 11.5T320-389q0 12 7 21.5t18 14.5l-68 68Zm83-271Zm0 0ZM296-80l-56-56 544-544 56 56-144 144h144v80H616l-20 20 60 60h184v80H736l84 84-56 56-84-84v104h-80v-184l-60-60-20 20v224h-80v-144L296-80Z" />
  </svg>
)
