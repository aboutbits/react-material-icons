import React from 'react'
import { IconProps } from './types'

export const IconTamperDetectionOffSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M145-40 0-184l56-56 64 64v-324h60v180h40v-240h60v240h40v-200h60v200h40v-160h60v440H145Zm677 14L688-160H560v-128L248-600H80v-168l-54-54 56-56L878-82l-56 56Zm58-234L720-420v68L272-800h448v260l160-160v440Z" />
  </svg>
)
