import React from 'react'
import { IconProps } from './types'

const IconSwitchVideoOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m300-340 56-56-44-44h176l-44 44 56 56 140-140-140-140-56 56 44 44H312l44-44-56-56-140 140 140 140ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Z" />
  </svg>
)

export { IconSwitchVideoOutlinedFilled as default }
