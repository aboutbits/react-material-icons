import React from 'react'
import { IconProps } from './types.js'

export const IconWifiPasswordOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M85-516 0-601q93-93 215.5-146T480-800q142 0 264.5 53T960-601l-85 85q-76-77-177.5-120.5T480-680q-116 0-217.5 43.5T85-516Zm169 170-84-85q60-60 139.5-94.5T480-560q91 0 170.5 34.5T790-431l-84 85q-44-44-102-69t-124-25q-66 0-124 25t-102 69Zm226 226q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM760 0q-17 0-28.5-11.5T720-40v-120q0-17 11.5-28.5T760-200v-40q0-33 23.5-56.5T840-320q33 0 56.5 23.5T920-240v40q17 0 28.5 11.5T960-160v120q0 17-11.5 28.5T920 0H760Zm40-200h80v-40q0-17-11.5-28.5T840-280q-17 0-28.5 11.5T800-240v40Z" />
  </svg>
)
