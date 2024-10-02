import React from 'react'
import { IconProps } from './types'

export const IconTamperDetectionOffSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M880-260 720-420v68l-80-80v-288H352l-80-80h448v260l160-160v440ZM80-600v-200h80l80 80h-80v120H80Zm480 440v-80h80v-80l80 80v80H560ZM822-26 26-822l56-56L878-82l-56 56ZM460-500Zm36-76ZM145-40 0-184l56-56 64 64v-324h60v180h40v-240h60v240h40v-200h60v200h40v-160h60v440H145Z" />
  </svg>
)
