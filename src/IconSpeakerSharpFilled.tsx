import React from 'react'
import { IconProps } from './types.js'

export const IconSpeakerSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-80H200v-800h560v800ZM480-600q33 0 56.5-23.5T560-680q0-33-23.5-56.5T480-760q-33 0-56.5 23.5T400-680q0 33 23.5 56.5T480-600Zm0 400q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-80q-33 0-56.5-23.5T400-360q0-33 23.5-56.5T480-440q33 0 56.5 23.5T560-360q0 33-23.5 56.5T480-280Z" />
  </svg>
)