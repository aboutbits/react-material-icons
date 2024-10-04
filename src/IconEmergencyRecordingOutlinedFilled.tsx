import React from 'react'
import { IconProps } from './types.js'

export const IconEmergencyRecordingOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-280h80v-131l120 69 40-69-120-69 120-69-40-69-120 69v-131h-80v131l-120-69-40 69 120 69-120 69 40 69 120-69v131ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Z" />
  </svg>
)