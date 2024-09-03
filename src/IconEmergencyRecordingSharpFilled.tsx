import React from 'react'
import { IconProps } from './types'

const IconEmergencyRecordingSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-280h80v-131l120 69 40-69-120-69 120-69-40-69-120 69v-131h-80v131l-120-69-40 69 120 69-120 69 40 69 120-69v131ZM80-160v-640h640v260l160-160v440L720-420v260H80Z" />
  </svg>
)

export { IconEmergencyRecordingSharpFilled as default }
