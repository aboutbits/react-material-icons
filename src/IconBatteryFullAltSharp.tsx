import React from 'react'
import { IconProps } from './types'

export const IconBatteryFullAltSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-280v-120H80v-160h80v-120h720v400H160Z" />
  </svg>
)
