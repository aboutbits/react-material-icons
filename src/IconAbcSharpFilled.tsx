import React from 'react'
import { IconProps } from './types'

export const IconAbcSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-360v-240h200v80h-60v-20h-80v120h80v-20h60v80H640Zm-260 0v-240h170l30 30v60l-30 30 30 30v60l-30 30H380Zm60-150h80v-30h-80v30Zm0 90h80v-30h-80v30Zm-320 60v-240h200v240h-60v-60h-80v60h-60Zm60-120h80v-60h-80v60Z" />
  </svg>
)
