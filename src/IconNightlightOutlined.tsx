import React from 'react'
import { IconProps } from './types'

export const IconNightlightOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-80q-82 0-155-31.5t-127.5-86Q223-252 191.5-325T160-480q0-83 31.5-155.5t86-127Q332-817 405-848.5T560-880q54 0 105 14t95 40q-91 53-145.5 143.5T560-480q0 112 54.5 202.5T760-134q-44 26-95 40T560-80Zm0-80h21q10 0 19-2-57-66-88.5-147.5T480-480q0-89 31.5-170.5T600-798q-9-2-19-2h-21q-133 0-226.5 93.5T240-480q0 133 93.5 226.5T560-160Zm-80-320Z" />
  </svg>
)
