import React from 'react'
import { IconProps } from './types'

const IconTurnRightRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-200v-320q0-33 23.5-56.5T360-600h328l-36-36q-11-11-11-28t11-28q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L708-428q-11 11-28 11t-28-11q-11-11-11-28t11-28l36-36H360v320q0 17-11.5 28.5T320-160q-17 0-28.5-11.5T280-200Z" />
  </svg>
)

export { IconTurnRightRounded as default }
