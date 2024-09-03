import React from 'react'
import { IconProps } from './types'

const IconSpatialSpeakerOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-80q-134 0-227-93T40-400h80q0 100 70 170t170 70v80Zm0-140q-75 0-127.5-52.5T180-400h80q0 42 29 71t71 29v80Zm40-140q-33 0-56.5-23.5T320-440v-320q0-33 23.5-56.5T400-840h160q33 0 56.5 23.5T640-760v320q0 33-23.5 56.5T560-360H400Zm0-80h160v-320H400v320Zm200 220v-80q42 0 71-29t29-71h80q0 75-52.5 127.5T600-220Zm0 140v-80q100 0 170-70t70-170h80q0 134-93 227T600-80ZM400-440h160-160Z" />
  </svg>
)

export { IconSpatialSpeakerOutlined as default }