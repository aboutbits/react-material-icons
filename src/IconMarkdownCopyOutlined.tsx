import React from 'react'
import { IconProps } from './types.js'

export const IconMarkdownCopyOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm210-360h60v-180h40v120h60v-120h40v180h60v-200q0-17-11.5-28.5T630-680H450q-17 0-28.5 11.5T410-640v200Zm-50 120v-480 480Z" />
  </svg>
)
