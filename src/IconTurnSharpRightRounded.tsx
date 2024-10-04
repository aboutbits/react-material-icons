import React from 'react'
import { IconProps } from './types'

const IconTurnSharpRightRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-120q-17 0-28.5-11.5T240-160v-200q0-33 23.5-56.5T320-440h320v-248l-36 36q-11 11-28 11t-28-11q-11-11-11-28t11-28l104-104q12-12 28-12t28 12l104 104q11 11 11 28t-11 28q-11 11-28 11t-28-11l-36-36v248q0 33-23.5 56.5T640-360H320v200q0 17-11.5 28.5T280-120Z" />
  </svg>
)

export { IconTurnSharpRightRounded as default }
