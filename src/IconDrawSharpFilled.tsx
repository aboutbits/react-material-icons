import React from 'react'
import { IconProps } from './types'

export const IconDrawSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120v-170l584-582 168 168-582 584H160Zm586-529 54-54-57-57-54 54 57 57Zm14 389q0-36-19-62t-51-45l-59 59q23 10 36 22t13 26q0 23-41.5 41.5T520-200v80q104 0 172-37t68-103ZM183-426l60-60q-21-8-32-17t-11-17q0-12 18.5-24.5T294-581q81-35 113.5-65.5T440-720q0-57-39.5-88.5T290-840q-44 0-88.5 22T125-760l55 53q25-25 54.5-39t55.5-14q34 0 52 10t18 30q0 14-16.5 25.5T262-654q-82 38-112 66t-30 68q0 29 15.5 52.5T183-426Z" />
  </svg>
)
