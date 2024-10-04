import React from 'react'
import { IconProps } from './types.js'

export const IconBodySystemSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m316-240 76-364-72 28v96h-80v-148l202-85q14-6 29.5-7.5T501-717q14 5 26.5 14t20.5 23l40 64q28 45 73.5 70.5T760-520v80q-70 0-125.5-28T540-540l-24 60 84 80v160h-80v-122l-78-72-42 194h-84Zm224-500q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-119 61.5-214T302-838l36 71q-79 39-128.5 115.5T160-480q0 134 93 227t227 93q134 0 227-93t93-227h80q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
  </svg>
)