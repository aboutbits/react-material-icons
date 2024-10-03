import React from 'react'
import { IconProps } from './types.js'

export const IconImportantDevicesSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-120v-398h240v398H640Zm40-80h160v-238H680v238Zm120-640v242H476l-36-112-36 112H290l92 74-34 114 92-70 92 70-34-114 62-50v294h-80v80h80v80H320v-80h80v-80H80v-560h720Z" />
  </svg>
)
