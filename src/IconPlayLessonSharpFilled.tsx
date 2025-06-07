import React from 'react'
import { IconProps } from './types.js'

export const IconPlayLessonSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80v-800h640v364q-18-2-40-2t-40 2q-109 16-174.5 96T440-240q0 44 13.5 83.5T490-80H120Zm600 40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-50-100 160-100-160-100v200ZM280-520l100-60 100 60v-280H280v280Z" />
  </svg>
)
