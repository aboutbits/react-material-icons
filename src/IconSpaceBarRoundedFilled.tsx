import React from 'react'
import { IconProps } from './types'

const IconSpaceBarRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-360q-33 0-56.5-23.5T160-440v-120q0-17 11.5-28.5T200-600q17 0 28.5 11.5T240-560v120h480v-120q0-17 11.5-28.5T760-600q17 0 28.5 11.5T800-560v120q0 33-23.5 56.5T720-360H240Z" />
  </svg>
)

export { IconSpaceBarRoundedFilled as default }
