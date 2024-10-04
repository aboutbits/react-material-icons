import React from 'react'
import { IconProps } from './types'

const IconScreenShareRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-520h80v56q0 7 6 9.5t11-2.5l89-89q6-6 6-14t-6-14l-89-89q-5-5-11-2.5t-6 9.5v56h-80q-50 0-85 35t-35 85v40q0 17 11.5 28.5T360-400q17 0 28.5-11.5T400-440v-40q0-17 11.5-28.5T440-520ZM80-120q-17 0-28.5-11.5T40-160q0-17 11.5-28.5T80-200h800q17 0 28.5 11.5T920-160q0 17-11.5 28.5T880-120H80Zm80-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z" />
  </svg>
)

export { IconScreenShareRounded as default }
