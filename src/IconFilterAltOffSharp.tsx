import React from 'react'
import { IconProps } from './types'

export const IconFilterAltOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m592-481-57-57 143-182H353l-80-80h569L592-481ZM791-56 560-287v127H400v-287L56-791l56-57 736 736-57 56ZM535-538Z" />
  </svg>
)
