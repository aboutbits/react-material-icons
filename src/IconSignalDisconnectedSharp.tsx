import React from 'react'
import { IconProps } from './types'

export const IconSignalDisconnectedSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m684-389-49-49q22-26 33.5-57t11.5-65q0-40-16-76t-44-64l48-48q38 38 59 86t21 102q0 48-17 91.5T684-389ZM565-508 428-645q12-7 25-11t27-4q42 0 71 29t29 71q0 14-4 27t-11 25Zm215 214-48-48q40-45 60-101.5T812-560q0-66-24.5-127.5T716-796l48-48q55 58 85.5 131T880-560q0 74-25.5 142.5T780-294Zm11 238L520-327v207h-80v-287L280-566v6q0 40 16 76t44 64l-48 48q-38-38-59-86t-21-102q0-17 2-33t7-33l-51-51q-11 29-16.5 58t-5.5 59q0 66 24.5 127.5T244-324l-48 48q-55-58-85.5-131T80-560q0-44 9.5-86.5T118-729l-62-62 56-57 736 736-57 56Z" />
  </svg>
)
