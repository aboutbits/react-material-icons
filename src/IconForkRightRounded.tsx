import React from 'react'
import { IconProps } from './types.js'

export const IconForkRightRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-120q-17 0-28.5-11.5T360-160v-527l-36 35q-11 11-28 11t-28-11q-12-12-11.5-28.5T268-708l104-104q12-12 28-12t28 12l104 104q12 12 11.5 28T532-652q-12 12-28 12.5T476-651l-36-36v261q35-31 79-44.5t88-13.5q11 0 21 1t19 3l-35-36q-11-11-11-28t11-28q12-12 28.5-11.5T668-572l104 104q12 12 12 28t-12 28L668-308q-11 11-28 11t-28-11q-12-12-12-28.5t11-27.5l36-36q-11-2-22-3.5t-22-1.5q-54 0-99.5 30.5T440-280v120q0 17-11.5 28.5T400-120Z" />
  </svg>
)
