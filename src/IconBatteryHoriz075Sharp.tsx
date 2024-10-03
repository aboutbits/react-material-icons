import React from 'react'
import { IconProps } from './types.js'

export const IconBatteryHoriz075Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-280v-120H80v-160h80v-120h720v400H160Zm80-80h160v-240H240v240Z" />
  </svg>
)
