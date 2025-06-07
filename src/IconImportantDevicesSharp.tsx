import React from 'react'
import { IconProps } from './types.js'

export const IconImportantDevicesSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-120v-398h240v398H640Zm40-80h160v-238H680v238Zm-360 80v-80h80v-80H80v-560h720v242h-80v-162H160v400h400v80h-80v80h80v80H320Zm28-290 92-70 92 70-34-114 92-74H476l-36-112-36 112H290l92 74-34 114Zm92-150Z" />
  </svg>
)
