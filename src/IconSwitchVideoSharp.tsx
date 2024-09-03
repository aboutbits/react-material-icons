import React from 'react'
import { IconProps } from './types'

const IconSwitchVideoSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m300-340 56-56-44-44h176l-44 44 56 56 140-140-140-140-56 56 44 44H312l44-44-56-56-140 140 140 140ZM80-160v-640h640v260l160-160v440L720-420v260H80Zm80-80h480v-480H160v480Zm0 0v-480 480Z" />
  </svg>
)

export { IconSwitchVideoSharp as default }
