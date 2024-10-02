import React from 'react'
import { IconProps } from './types'

export const IconSettingsVideoCameraSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-80v-320h320v120l80-80v240l-80-80v120H520Zm-150 0-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v13.5H622q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 48 27 84t71 50v266h-70Z" />
  </svg>
)
