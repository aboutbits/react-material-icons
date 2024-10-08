import React from 'react'
import { IconProps } from './types'

const IconTrackpadInputSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M593-80q-24 0-46-9t-39-26L304-320l64-66 112 33v-327h80v433l-98-28 103 103q6 6 13 9t15 3h167q33 0 56.5-23.5T840-240v-200h80v200q0 66-47 113T760-80H593Zm7-280v-200h80v200h-80Zm120 0v-160h80v160h-80Zm40 200H565h195ZM80-200v-640h760v240h-80v-160H160v480h72l79 80H80Z" />
  </svg>
)

export { IconTrackpadInputSharp as default }
