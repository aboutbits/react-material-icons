import React from 'react'
import { IconProps } from './types.js'

export const IconAirlinesOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M232-240h462l90-480H562L232-240ZM80-160l440-640h360L760-160H80Zm500-240q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM232-240h462-462Z" />
  </svg>
)
