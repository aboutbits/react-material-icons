import React from 'react'
import { IconProps } from './types'

export const IconSettingsAccountBoxSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-40v-400h400v400H520ZM370-80l-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-85 65H616q-14-43-50-71.5T482-620q-58 0-99 41t-41 99q0 48 27 84t71 50v266h-70Zm230-40h240v-33q-25-23-56-35t-64-12q-33 0-64 12t-56 35v33Zm120-120q25 0 42.5-17.5T780-300q0-25-17.5-42.5T720-360q-25 0-42.5 17.5T660-300q0 25 17.5 42.5T720-240Z" />
  </svg>
)
