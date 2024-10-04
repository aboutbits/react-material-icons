import React from 'react'
import { IconProps } from './types.js'

export const IconRingVolumeOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m136-144-92-90q-12-12-12-28t12-28q88-95 203-142.5T480-480q118 0 232.5 47.5T916-290q12 12 12 28t-12 28l-92 90q-11 11-25.5 12t-26.5-8l-116-88q-8-6-12-14t-4-18v-114q-38-12-78-19t-82-7q-42 0-82 7t-78 19v114q0 10-4 18t-12 14l-116 88q-12 9-26.5 8T136-144Zm104-202q-29 15-56 34.5T128-268l40 40 72-56v-62Zm480 2v60l72 56 40-38q-29-26-56-45t-56-33Zm-480-2Zm480 2ZM440-680v-200h80v200h-80Zm264 114-56-58 142-142 56 58-142 142Zm-448 0L114-708l56-58 142 142-56 58Z" />
  </svg>
)
