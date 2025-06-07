import React from 'react'
import { IconProps } from './types.js'

export const IconTrackpadInput3SharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M543-80 304-320l64-66 112 33v-327h80v280h40v-320h80v320h40v-240h80v240h40v-40h80v200q0 66-47 113T760-80H543ZM80-200v-640h760v80H160v480h72l79 80H80Z" />
  </svg>
)
