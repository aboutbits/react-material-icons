import React from 'react'
import { IconProps } from './types'

export const IconEnergyProgramTimeUsedOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-440ZM120-80q-33 0-56.5-23.5T40-160v-560q0-33 23.5-56.5T120-800h320v80H120v560h560v-240h80v240q0 33-23.5 56.5T680-80H120Zm80-160h80v-280h-80v280Zm160 0h80v-400h-80v400Zm160 0h80v-160h-80v160Zm200-240q-30 0-59-9t-54-26l-15 14q-12 11-28.5 11T536-501q-11-11-11-28t11-28l16-16q-16-24-24-51t-8-56q0-83 58.5-141.5T720-880h200v200q0 83-58.5 141.5T720-480Zm0-80q50 0 85-35t35-85v-120H720q-50 0-85 35t-35 85q0 13 2.5 25t7.5 24l104-104q11-11 28-11t28 11q12 12 12 28.5T770-678L666-574q13 6 26.5 10t27.5 4Zm-6-119Z" />
  </svg>
)
