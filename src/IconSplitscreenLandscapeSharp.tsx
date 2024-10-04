import React from 'react'
import { IconProps } from './types'

const IconSplitscreenLandscapeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-320h200v-320H520v320Zm-280 0h200v-320H240v320ZM80-160v-640h800v640H80Zm720-80v-480H160v480h640ZM160-720v480-480Z" />
  </svg>
)

export { IconSplitscreenLandscapeSharp as default }
