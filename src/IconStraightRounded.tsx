import React from 'react'
import { IconProps } from './types'

const IconStraightRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m440-687-36 36q-11 11-27.5 11T348-652q-11-11-11-28t11-28l104-104q12-12 28-12t28 12l104 104q11 11 11.5 27.5T612-652q-11 11-28 11t-28-11l-36-35v527q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160v-527Z" />
  </svg>
)

export { IconStraightRounded as default }
