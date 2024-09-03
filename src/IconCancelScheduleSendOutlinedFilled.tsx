import React from 'react'
import { IconProps } from './types'

const IconCancelScheduleSendOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m609-181 70-70 70 70 30-30-69-69 70-70-30-30-70 70-70-70-30 30 70 70-70 70 29 29Zm-489 21v-240l320-80-320-80v-240l572 240h-12q-117 0-198.5 82.5T400-278L120-160Zm560 80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Z" />
  </svg>
)

export { IconCancelScheduleSendOutlinedFilled as default }
