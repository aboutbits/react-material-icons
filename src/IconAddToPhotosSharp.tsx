import React from 'react'
import { IconProps } from './types'

const IconAddToPhotosSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-400h80v-120h120v-80H600v-120h-80v120H400v80h120v120ZM240-240v-640h640v640H240Zm80-80h480v-480H320v480ZM80-80v-640h80v560h560v80H80Zm240-720v480-480Z" />
  </svg>
)

export { IconAddToPhotosSharp as default }
