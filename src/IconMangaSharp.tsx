import React from 'react'
import { IconProps } from './types'

const IconMangaSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm244-80-43-60 76-105v-130l123-40 77-105 123 40 120-39v-41H160v480h164Zm113-237Zm-14 237h377v-309l-27-37-93 30-92-30-58 79-93 30v98l-57 79 43 60Z" />
  </svg>
)

export { IconMangaSharp as default }
