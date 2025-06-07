import React from 'react'
import { IconProps } from './types.js'

export const IconEnergyProgramTimeUsedSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-440ZM40-80v-720h400v80H120v560h560v-240h80v320H40Zm160-160h80v-280h-80v280Zm160 0h80v-400h-80v400Zm160 0h80v-160h-80v160Zm200-240q-30 0-59-9t-54-26l-44 41-55-55 44-44q-16-24-24-51t-8-56q0-83 58.5-141.5T720-880h200v200q0 83-58.5 141.5T720-480Zm0-80q50 0 85-35t35-85v-120H720q-50 0-85 35t-35 85q0 13 2.5 25t7.5 24l132-132 57 56-133 133q13 6 26.5 10t27.5 4Zm-5-119Z" />
  </svg>
)
