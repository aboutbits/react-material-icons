import React from 'react'
import { IconProps } from './types'

export const IconSwitchAccessShortcutAddOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-320v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM600-80q-127-48-203.5-158T320-484q0-91 36-172.5T458-800H320v-80h280v280h-80v-148q-57 51-88.5 119.5T400-484q0 102 54 187.5T600-167v87Z" />
  </svg>
)
