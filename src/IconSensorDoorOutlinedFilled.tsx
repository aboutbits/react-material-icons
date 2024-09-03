import React from 'react'
import { IconProps } from './types'

const IconSensorDoorOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-720q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v720H160Zm460-340q25 0 42.5-17.5T680-480q0-25-17.5-42.5T620-540q-25 0-42.5 17.5T560-480q0 25 17.5 42.5T620-420Z" />
  </svg>
)

export { IconSensorDoorOutlinedFilled as default }
