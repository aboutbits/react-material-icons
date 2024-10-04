import React from 'react'
import { IconProps } from './types'

const IconSosRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M420-280q-33 0-56.5-23.5T340-360v-240q0-33 23.5-56.5T420-680h120q33 0 56.5 23.5T620-600v240q0 33-23.5 56.5T540-280H420Zm-220 0H80q-17 0-28.5-11.5T40-320q0-17 11.5-28.5T80-360h120v-80h-80q-33 0-56.5-23.5T40-520v-80q0-33 23.5-56.5T120-680h120q17 0 28.5 11.5T280-640q0 17-11.5 28.5T240-600H120v80h80q33 0 56.5 23.5T280-440v80q0 33-23.5 56.5T200-280Zm640 0H720q-17 0-28.5-11.5T680-320q0-17 11.5-28.5T720-360h120v-80h-80q-33 0-56.5-23.5T680-520v-80q0-33 23.5-56.5T760-680h120q17 0 28.5 11.5T920-640q0 17-11.5 28.5T880-600H760v80h80q33 0 56.5 23.5T920-440v80q0 33-23.5 56.5T840-280Zm-420-80h120v-240H420v240Z" />
  </svg>
)

export { IconSosRoundedFilled as default }
