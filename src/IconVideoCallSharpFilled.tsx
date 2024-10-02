import React from 'react'
import { IconProps } from './types'

export const IconVideoCallSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-320h80v-120h120v-80H440v-120h-80v120H240v80h120v120ZM80-160v-640h640v260l160-160v440L720-420v260H80Z" />
  </svg>
)
