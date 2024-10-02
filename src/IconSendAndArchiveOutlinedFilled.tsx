import React from 'react'
import { IconProps } from './types'

export const IconSendAndArchiveOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-160v-240l320-80-320-80v-240l572 240h-12q-117 0-198.5 82.5T400-278L120-160Zm560 80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm0-80 120-120-28-28-72 72v-164h-40v164l-72-72-28 28 120 120Z" />
  </svg>
)
