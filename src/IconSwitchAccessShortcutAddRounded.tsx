import React from 'react'
import { IconProps } from './types'

const IconSwitchAccessShortcutAddRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M21 18c.55 0 1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1zM7.06 8.94 5 8l2.06-.94L8 5l.94 2.06L11 8l-2.06.94L8 11l-.94-2.06zM8 21l.94-2.06L11 18l-2.06-.94L8 15l-.94 2.06L5 18l2.06.94L8 21zm-3.63-8.63L3 13l1.37.63L5 15l.63-1.37L7 13l-1.37-.63L5 11l-.63 1.37zM19 20.41c0 .78-.84 1.25-1.51.86C14.21 19.36 12 15.79 12 12c0-2.73 1.08-5.27 2.75-7.25l-1.9-1.9c-.31-.31-.09-.85.36-.85h5.29c.28 0 .5.22.5.5v5.29c0 .45-.54.67-.85.35l-1.97-1.97C14.84 7.82 14 9.88 14 12c0 3.13 1.86 6.01 4.51 7.55.3.18.49.51.49.86z" />
  </svg>
)

export { IconSwitchAccessShortcutAddRounded as default }
