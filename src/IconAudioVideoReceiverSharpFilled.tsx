import React from 'react'
import { IconProps } from './types.js'

export const IconAudioVideoReceiverSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-280v-480h800v480h-80v80h-80v-80H240v80h-80v-80H80Zm580-160q33 0 56.5-23.5T740-520q0-33-23.5-56.5T660-600q-33 0-56.5 23.5T580-520q0 33 23.5 56.5T660-440Zm-420 0h280v-160H240v160Z" />
  </svg>
)