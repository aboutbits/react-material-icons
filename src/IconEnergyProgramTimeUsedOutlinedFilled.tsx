import React from 'react'
import { IconProps } from './types'

const IconEnergyProgramTimeUsedOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M658-623q12 12 28 12.5t28-11.5l56-56q12-12 12-28.5T770-735q-11-11-28-11t-28 11l-56 56q-11 11-11 27.5t11 28.5ZM120-80q-33 0-56.5-23.5T40-160v-560q0-33 23.5-56.5T120-800h320v320q0 33 23.5 56.5T520-400h240v240q0 33-23.5 56.5T680-80H120Zm600-400q-30 0-59-9t-54-26l-15 14q-12 11-28.5 11T536-501q-11-11-11-28t11-28l16-16q-16-24-24-51t-8-56q0-83 58.5-141.5T720-880h200v200q0 83-58.5 141.5T720-480ZM200-240h80v-280h-80v280Zm160 0h80v-400h-80v400Zm160 0h80v-160h-80v160Z" />
  </svg>
)

export { IconEnergyProgramTimeUsedOutlinedFilled as default }
