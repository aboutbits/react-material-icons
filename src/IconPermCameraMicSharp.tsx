import React from 'react'
import { IconProps } from './types'

export const IconPermCameraMicSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-120H80v-640h206l74-80h240l74 80h206v640H600v-80h200v-480H638l-73-80H395l-73 80H160v480h200v80Zm80 0h80v-124q86-14 143-80.5T720-480h-80q0 66-47 113t-113 47q-66 0-113-47t-47-113h-80q0 89 57 155.5T440-244v124Zm40-280q33 0 56.5-23.5T560-480v-160q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640v160q0 33 23.5 56.5T480-400ZM160-200h640-640Z" />
  </svg>
)
