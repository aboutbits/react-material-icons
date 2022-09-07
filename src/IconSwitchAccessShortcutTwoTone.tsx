import React from 'react'
import { IconProps } from './types'

const IconSwitchAccessShortcutTwoTone: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M7.06,8.94L5,8l2.06-0.94L8,5l0.94,2.06L11,8L8.94,8.94L8,11L7.06,8.94z M8,21l0.94-2.06L11,18l-2.06-0.94L8,15l-0.94,2.06 L5,18l2.06,0.94L8,21z M4.37,12.37L3,13l1.37,0.63L5,15l0.63-1.37L7,13l-1.37-0.63L5,11L4.37,12.37z M12,12 c0-2.73,1.08-5.27,2.75-7.25L12,2h7v7l-2.82-2.82C14.84,7.82,14,9.88,14,12c0,3.32,2.1,6.36,5,7.82L19,22 C14.91,20.41,12,16.35,12,12z" />
  </svg>
)

export { IconSwitchAccessShortcutTwoTone as default }
