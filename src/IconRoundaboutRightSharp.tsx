import React from 'react'
import { IconProps } from './types'

const IconRoundaboutRightSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-120v-246q-85-14-142.5-79.5T80-600q0-100 70-170t170-70q89 0 154.5 57.5T554-640h173l-63-64 56-56 160 160-160 160-57-56 64-64H478v-40q0-66-46-113t-112-47q-66 0-113 47t-47 113q0 66 47 112t113 46h40v322h-80Z" />
  </svg>
)

export { IconRoundaboutRightSharp as default }
