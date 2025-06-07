import React from 'react'
import { IconProps } from './types.js'

export const IconPartyModeSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-640h206l74-80h240l74 80h206v640H80Zm400-140q75 0 127.5-52.5T660-440q0-5-.5-10t-1.5-10h-80q2 5 2 10v10q0 42-29 71t-71 29H330q24 36 63.5 58t86.5 22ZM302-420h80q-2-5-2-10v-10q0-42 29-71t71-29h150q-24-36-63.5-58T480-620q-75 0-127.5 52.5T300-440q0 5 .5 10t1.5 10Z" />
  </svg>
)
