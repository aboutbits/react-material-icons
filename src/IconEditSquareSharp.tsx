import React from 'react'
import { IconProps } from './types'

export const IconEditSquareSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h437l-80 80H200v560h560v-278l80-80v438H120Zm360-360ZM360-360v-170l425-425 167 171-422 424H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
  </svg>
)
