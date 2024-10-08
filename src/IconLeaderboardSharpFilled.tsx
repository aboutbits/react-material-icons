import React from 'react'
import { IconProps } from './types'

const IconLeaderboardSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-480h220v480H80Zm290 0v-720h220v720H370Zm290 0v-400h220v400H660Z" />
  </svg>
)

export { IconLeaderboardSharpFilled as default }
