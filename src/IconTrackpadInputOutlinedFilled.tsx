import React from 'react'
import { IconProps } from './types.js'

export const IconTrackpadInputOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-200q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h600q33 0 56.5 23.5T840-760v160h-80v-160H160v480h72l79 80H160ZM593-80q-24 0-46-9t-39-26L304-320l33-34q14-14 34-19t40 0l69 20v-287q0-17 11.5-28.5T520-680q17 0 28.5 11.5T560-640v240h40v-120q0-17 11.5-28.5T640-560q17 0 28.5 11.5T680-520v120h40v-80q0-17 11.5-28.5T760-520q17 0 28.5 11.5T800-480v80h40q0-17 11.5-28.5T880-440q17 0 28.5 11.5T920-400v160q0 66-47 113T760-80H593Z" />
  </svg>
)