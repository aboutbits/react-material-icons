import React from 'react'
import { IconProps } from './types.js'

export const IconUpiPayRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M470-360q13 0 21.5-8.5T500-390v-50h100q17 0 28.5-11.5T640-480v-80q0-17-11.5-28.5T600-600H480q-17 0-28.5 11.5T440-560v170q0 13 8.5 21.5T470-360Zm240 0q13 0 21.5-8.5T740-390v-180q0-13-8.5-21.5T710-600q-13 0-21.5 8.5T680-570v180q0 13 8.5 21.5T710-360ZM500-500v-40h80v40h-80ZM240-360h120q17 0 28.5-11.5T400-400v-170q0-13-8.5-21.5T370-600q-13 0-21.5 8.5T340-570v150h-80v-150q0-13-8.5-21.5T230-600q-13 0-21.5 8.5T200-570v170q0 17 11.5 28.5T240-360Zm-80 200q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z" />
  </svg>
)