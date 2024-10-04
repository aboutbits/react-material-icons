import React from 'react'
import { IconProps } from './types.js'

export const IconMitreOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-360v-240h100v-80H520v-240h280v240H700v80h100v240H520ZM160-40v-240h100v-80H160v-240h100v-80H160v-240h280v240H340v80h100v240H340v80h100v240H160Z" />
  </svg>
)
