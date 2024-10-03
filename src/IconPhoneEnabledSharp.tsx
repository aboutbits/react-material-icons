import React from 'react'
import { IconProps } from './types.js'

export const IconPhoneEnabledSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M162-120h-42v-235l200-41 116 116q40-23 74.5-49.5T574-385q31-30 58-65t49-74L567-639l37-201h236v42q0 126-54 248T632-328Q532-228 409.5-174T162-120Zm557-480q15-36 25-75.5t15-84.5h-89l-17 94 66 66ZM361-242l-67-67-94 19v88q40-3 80.5-13t80.5-27Zm358-358ZM361-242Z" />
  </svg>
)
