import React from 'react'
import { IconProps } from './types'

const IconSosOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M420-280q-33 0-56.5-23.5T340-360v-240q0-33 23.5-56.5T420-680h120q33 0 56.5 23.5T620-600v240q0 33-23.5 56.5T540-280H420Zm-380 0v-80h160v-80h-80q-33 0-56.5-23.5T40-520v-80q0-33 23.5-56.5T120-680h160v80H120v80h80q33 0 56.5 23.5T280-440v80q0 33-23.5 56.5T200-280H40Zm640 0v-80h160v-80h-80q-33 0-56.5-23.5T680-520v-80q0-33 23.5-56.5T760-680h160v80H760v80h80q33 0 56.5 23.5T920-440v80q0 33-23.5 56.5T840-280H680Zm-260-80h120v-240H420v240Z" />
  </svg>
)

export { IconSosOutlinedFilled as default }
