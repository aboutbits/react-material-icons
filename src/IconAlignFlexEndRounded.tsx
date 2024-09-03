import React from 'react'
import { IconProps } from './types'

const IconAlignFlexEndRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80q-17 0-28.5-11.5T80-120q0-17 11.5-28.5T120-160h720q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80H120Zm340-160q-17 0-28.5-11.5T420-280v-480q0-17 11.5-28.5T460-800h40q17 0 28.5 11.5T540-760v480q0 17-11.5 28.5T500-240h-40Z" />
  </svg>
)

export { IconAlignFlexEndRounded as default }