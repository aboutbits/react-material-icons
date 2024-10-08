import React from 'react'
import { IconProps } from './types'

const IconMarkdownCopySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-240v-640h520v640H280Zm80-80h360v-480H360v480ZM120-80v-640h80v560h440v80H120Zm290-360h60v-180h40v120h60v-120h40v180h60v-240H410v240Zm-50 120v-480 480Z" />
  </svg>
)

export { IconMarkdownCopySharp as default }
