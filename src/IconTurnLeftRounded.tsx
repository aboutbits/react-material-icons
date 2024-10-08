import React from 'react'
import { IconProps } from './types'

const IconTurnLeftRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m272-520 36 36q11 11 11 28t-11 28q-11 11-28 11t-28-11L148-532q-12-12-12-28t12-28l104-104q11-11 28-11t28 11q11 11 11 28t-11 28l-36 36h328q33 0 56.5 23.5T680-520v320q0 17-11.5 28.5T640-160q-17 0-28.5-11.5T600-200v-320H272Z" />
  </svg>
)

export { IconTurnLeftRounded as default }
