import React from 'react'
import { IconProps } from './types'

const IconMeetingRoom: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M14 6v15H3v-2h2V3h9v1h5v15h2v2h-4V6h-3zm-4 5v2h2v-2h-2z" />
  </svg>
)

export { IconMeetingRoom as default }
