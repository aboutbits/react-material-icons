import React from 'react'
import { IconProps } from './types.js'

export const IconVoiceChatSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-520h60v-80h-60v80Zm100 80h60v-240h-60v240Zm110 80h60v-400h-60v400Zm110-80h60v-240h-60v240Zm100-80h60v-80h-60v80ZM80-80v-800h800v640H240L80-80Z" />
  </svg>
)
