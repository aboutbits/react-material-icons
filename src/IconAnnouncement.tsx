import React from 'react'
import { IconProps } from './types'

const IconAnnouncement: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>
      {props.title === undefined ? 'IconAnnouncement' : props.title}
    </title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z" />
  </svg>
)

export { IconAnnouncement as default }
