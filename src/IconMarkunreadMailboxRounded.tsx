import React from 'react'
import { IconProps } from './types'

const IconMarkunreadMailboxRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-560h-80v400h640v-400H440q-17 0-28.5-11.5T400-600q0-17 11.5-28.5T440-640h360q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h80v-200q0-17 11.5-28.5T280-880h240q17 0 28.5 11.5T560-840v80q0 17-11.5 28.5T520-720H320v280q0 17-11.5 28.5T280-400q-17 0-28.5-11.5T240-440v-120Zm-80 0v400-400 160-160Z" />
  </svg>
)

export { IconMarkunreadMailboxRounded as default }
