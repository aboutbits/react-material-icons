import React from 'react'
import { IconProps } from './types'

const IconLabProfileOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-480h320v-80H320v80Zm0-160h320v-80H320v80Zm478 499L636-352q-17-23-42-35.5T540-400H160v-400q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 5-.5 9.5T798-141ZM240-80q-33 0-56.5-23.5T160-160v-160h380q10 0 18.5 4.5T573-303L741-83q-5 2-10.5 2.5T720-80H240Z" />
  </svg>
)

export { IconLabProfileOutlinedFilled as default }
