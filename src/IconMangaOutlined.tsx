import React from 'react'
import { IconProps } from './types'

export const IconMangaOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm263-80h377v-309l-27-37-93 30-92-30-58 79-93 30v98l-57 79 43 60Zm-99 0-43-60 76-105v-130l123-40 77-105 123 40 120-39v-41H160v480h164Zm113-237Z" />
  </svg>
)
