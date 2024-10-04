import React from 'react'
import { IconProps } from './types'

const IconMovingRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M800-583 621-405q-35 35-85 35t-85-35l-47-47q-11-11-28-11t-28 11L164-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l184-184q35-35 85-35t85 35l46 46q12 12 28.5 12t28.5-12l178-178h-63q-17 0-28.5-11.5T640-680q0-17 11.5-28.5T680-720h160q17 0 28.5 11.5T880-680v160q0 17-11.5 28.5T840-480q-17 0-28.5-11.5T800-520v-63Z" />
  </svg>
)

export { IconMovingRounded as default }
