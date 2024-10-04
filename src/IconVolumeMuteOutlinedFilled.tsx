import React from 'react'
import { IconProps } from './types'

const IconVolumeMuteOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-360v-240h160l200-200v640L440-360H280Z" />
  </svg>
)

export { IconVolumeMuteOutlinedFilled as default }
