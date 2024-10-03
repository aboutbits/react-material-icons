import React from 'react'
import { IconProps } from './types.js'

export const IconDoNotTouchSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M840-234 601-473h-1v-407h80v407h80v-327h80v566ZM520-554l-80-80v-286h80v366ZM360-714l-80-80v-46h80v126ZM339-40 48-465l69-66 163 114v-150L27-820l57-57L896-65 839-8l-32-32H339Z" />
  </svg>
)
