import React from 'react'
import { IconProps } from './types.js'

export const IconTamperDetectionOnSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-280v-440H80v-200h640v260l160-160v440L720-540v260H560Zm-80 120H145L0-304l56-56 64 64v-324h60v180h40v-240h60v240h40v-200h60v200h40v-160h60v440Z" />
  </svg>
)
