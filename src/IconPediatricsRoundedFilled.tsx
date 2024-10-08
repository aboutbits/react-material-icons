import React from 'react'
import { IconProps } from './types'

const IconPediatricsRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-680q-17 0-28.5-11.5T280-720q0-17 11.5-28.5T320-760h120v-80q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v80h120q17 0 28.5 11.5T680-720q0 17-11.5 28.5T640-680H320Zm40 600q-33 0-56.5-23.5T280-160v-80h160q17 0 28.5-11.5T480-280q0-17-11.5-28.5T440-320H280v-80h160q17 0 28.5-11.5T480-440q0-17-11.5-28.5T440-480H280v-40q0-50 35-85t85-35h160q50 0 85 35t35 85v360q0 33-23.5 56.5T600-80H360Z" />
  </svg>
)

export { IconPediatricsRoundedFilled as default }
