import React from 'react'
import { IconProps } from './types'

const IconTouchpadMouseSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M660-160q58 0 99-41t41-99v-60H520v60q0 58 41 99t99 41ZM521-440h99v-114q-38 11-65.5 42T521-440Zm179 0h99q-6-41-33.5-72T700-554v114ZM660-80q-92 0-156-64t-64-156v-120q0-92 64-156t156-64q92 0 156 64t64 156v120q0 92-64 156T660-80ZM160-240v-480 480Zm-80 80v-640h800v80H160v480h201v80H80Z" />
  </svg>
)

export { IconTouchpadMouseSharp as default }