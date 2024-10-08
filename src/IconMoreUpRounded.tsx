import React from 'react'
import { IconProps } from './types'

const IconMoreUpRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-680H360q-17 0-28.5-11.5T320-720q0-17 11.5-28.5T360-760h360q17 0 28.5 11.5T760-720v360q0 17-11.5 28.5T720-320q-17 0-28.5-11.5T680-360v-320ZM480-480H160q-17 0-28.5-11.5T120-520q0-17 11.5-28.5T160-560h360q17 0 28.5 11.5T560-520v360q0 17-11.5 28.5T520-120q-17 0-28.5-11.5T480-160v-320Z" />
  </svg>
)

export { IconMoreUpRounded as default }
