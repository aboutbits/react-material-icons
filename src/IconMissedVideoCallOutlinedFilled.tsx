import React from 'react'
import { IconProps } from './types'

const IconMissedVideoCallOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m428-320 180-182-56-56-124 124-88-86h60v-80H200v200h80v-68l148 148ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Z" />
  </svg>
)

export { IconMissedVideoCallOutlinedFilled as default }
