import React from 'react'
import { IconProps } from './types'

const IconDoNotTouchSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m840-234-80-80v-486h80v566ZM360-714l-80-80v-46h80v126Zm160 160-80-80v-286h80v366Zm160 81h-80v-407h80v407ZM381-120h346L360-487v224L212-367l169 247Zm-42 80L48-465l69-66 163 114v-150L27-820l57-57L896-65 839-8l-32-32H339Zm261-433Zm-56 169Z" />
  </svg>
)

export { IconDoNotTouchSharp as default }
