import React from 'react'
import { IconProps } from './types'

const IconAlignSelfStretchRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80q-17 0-28.5-11.5T80-120q0-17 11.5-28.5T120-160h720q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80H120Zm340-180q-17 0-28.5-11.5T420-300v-380q0-17 11.5-28.5T460-720h40q17 0 28.5 11.5T540-680v380q0 17-11.5 28.5T500-260h-40ZM120-800q-17 0-28.5-11.5T80-840q0-17 11.5-28.5T120-880h720q17 0 28.5 11.5T880-840q0 17-11.5 28.5T840-800H120Z" />
  </svg>
)

export { IconAlignSelfStretchRounded as default }