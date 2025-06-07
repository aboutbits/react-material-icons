import React from 'react'
import { IconProps } from './types.js'

export const IconAudioFileSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M430-200q38 0 64-26t26-64v-150h120v-80H480v155q-11-8-23.5-11.5T430-380q-38 0-64 26t-26 64q0 38 26 64t64 26ZM160-80v-800h400l240 240v560H160Zm360-520h200L520-800v200Z" />
  </svg>
)
