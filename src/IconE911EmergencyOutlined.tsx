import React from 'react'
import { IconProps } from './types'

const IconE911EmergencyOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-160v-80h64l79-263q8-26 29.5-41.5T420-560h120q26 0 47.5 15.5T617-503l79 263h64v80H200Zm148-80h264l-72-240H420l-72 240Zm92-400v-200h80v200h-80Zm238 99-57-57 142-141 56 56-141 142Zm42 181v-80h200v80H720ZM282-541 141-683l56-56 142 141-57 57ZM40-360v-80h200v80H40Zm440 120Z" />
  </svg>
)

export { IconE911EmergencyOutlined as default }