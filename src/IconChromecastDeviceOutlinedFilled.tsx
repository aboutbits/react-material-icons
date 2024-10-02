import React from 'react'
import { IconProps } from './types'

export const IconChromecastDeviceOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M800-380v-200h120v200H800ZM240-270q-78 0-139-46T40-420v-120q0-59 61-104.5T240-690q31 0 59 6.5t67 23.5q12 6 22.5 9.5t19 6Q416-642 424-641t16 1h320v320H440q-8 0-16 1t-16.5 3.5q-8.5 2.5-19 6T366-300q-39 17-67 23.5t-59 6.5ZM100-460h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14q0 8 6 14t14 6Z" />
  </svg>
)
