import React from 'react'
import { IconProps } from './types.js'

export const IconFolderCheckRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m434-410-57-57q-12-12-28-12t-28 12q-12 12-12 28.5t12 28.5l84 85q12 12 28.5 12t28.5-12l170-170q12-12 12-28.5T632-552q-12-12-28.5-12T575-552L434-410ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z" />
  </svg>
)