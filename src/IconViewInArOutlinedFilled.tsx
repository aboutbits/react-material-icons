import React from 'react'
import { IconProps } from './types'

const IconViewInArOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-181 240-296q-19-11-29.5-29.5T200-365v-230q0-21 10.5-39.5T240-664l200-115q19-11 40-11t40 11l200 115q19 11 29.5 29.5T760-595v230q0 21-10.5 39.5T720-296L520-181q-19 11-40 11t-40-11ZM80-680v-120q0-33 23.5-56.5T160-880h120v80H160v120H80ZM280-80H160q-33 0-56.5-23.5T80-160v-120h80v120h120v80Zm400 0v-80h120v-120h80v120q0 33-23.5 56.5T800-80H680Zm120-600v-120H680v-80h120q33 0 56.5 23.5T880-800v120h-80Zm-478 61-42 24v45l160 93v184l40 23 40-23v-184l160-93v-45l-42-24-158 93-158-93Z" />
  </svg>
)

export { IconViewInArOutlinedFilled as default }
