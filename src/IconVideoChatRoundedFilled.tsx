import React from 'react'
import { IconProps } from './types'

const IconVideoChatRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-400h240q17 0 28.5-11.5T600-440v-80l63 63q5 5 11 2.5t6-9.5v-192q0-7-6-9.5t-11 2.5l-63 63v-80q0-17-11.5-28.5T560-720H320q-17 0-28.5 11.5T280-680v240q0 17 11.5 28.5T320-400Zm-80 160-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Z" />
  </svg>
)

export { IconVideoChatRoundedFilled as default }
