import React from 'react'
import { IconProps } from './types'

const IconPipExitSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-360h360v-280h440v640H80Zm603-140 57-57-124-123h104v-80H480v240h80v-103l123 123ZM80-600v-200h280v200H80Z" />
  </svg>
)

export { IconPipExitSharpFilled as default }
