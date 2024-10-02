import React from 'react'
import { IconProps } from './types'

export const IconExperimentSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-80v-80h400v80h-80v240l222 270q32 39 10.5 84.5T760-120H200Zm80-120h400L544-400H416L280-240Zm-80 40h560L520-492v-268h-80v268L200-200Zm280-280Z" />
  </svg>
)
