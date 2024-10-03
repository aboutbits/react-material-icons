import React from 'react'
import { IconProps } from './types.js'

export const IconSettingsPhotoCameraOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-85 65H616q-14-43-50-71.5T482-620q-58 0-99 41t-41 99q0 48 27 84t71 50v266h-70Zm210 0q-25 0-42.5-17.5T520-140v-200q0-25 17.5-42.5T580-400h60l40-40h80l40 40h60q25 0 42.5 17.5T920-340v200q0 25-17.5 42.5T860-80H580Zm140-80q33 0 56.5-23.5T800-240q0-33-23.5-56.5T720-320q-33 0-56.5 23.5T640-240q0 33 23.5 56.5T720-160Z" />
  </svg>
)
