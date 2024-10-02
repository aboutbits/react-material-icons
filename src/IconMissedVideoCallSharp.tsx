import React from 'react'
import { IconProps } from './types'

export const IconMissedVideoCallSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h640v260l160-160v440L720-420v260H80Zm80-80h480v-480H160v480Zm0 0v-480 480Zm268-80 180-182-56-56-124 124-88-86h60v-80H200v200h80v-68l148 148Z" />
  </svg>
)
