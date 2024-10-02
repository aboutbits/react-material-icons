import React from 'react'
import { IconProps } from './types'

export const IconUngroupSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m348-292-56-56 172-172H320v-80h280v280h-80v-144L348-292Zm412-188v-280H480v-80h360v360h-80ZM120-120v-720h80v640h640v80H120Z" />
  </svg>
)
