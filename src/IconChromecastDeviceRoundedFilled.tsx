import React from 'react'
import { IconProps } from './types'

export const IconChromecastDeviceRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M840-380q-17 0-28.5-11.5T800-420v-120q0-17 11.5-28.5T840-580h40q17 0 28.5 11.5T920-540v120q0 17-11.5 28.5T880-380h-40Zm-160 60H440q-16 0-32.5 4.5T366-300q-39 17-67 23.5t-59 6.5q-78 0-139-46T40-420v-120q0-59 61-104.5T240-690q31 0 59 6.5t67 23.5q25 11 41.5 15.5T440-640h240q33 0 56.5 23.5T760-560v160q0 33-23.5 56.5T680-320ZM100-460h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14q0 8 6 14t14 6Z" />
  </svg>
)
