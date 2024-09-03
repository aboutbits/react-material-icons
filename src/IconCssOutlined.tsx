import React from 'react'
import { IconProps } from './types'

const IconCssOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M420-360q-17 0-28.5-11.5T380-400v-40h60v20h80v-40H420q-17 0-28.5-11.5T380-500v-60q0-17 11.5-28.5T420-600h120q17 0 28.5 11.5T580-560v40h-60v-20h-80v40h100q17 0 28.5 11.5T580-460v60q0 17-11.5 28.5T540-360H420Zm260 0q-17 0-28.5-11.5T640-400v-40h60v20h80v-40H680q-17 0-28.5-11.5T640-500v-60q0-17 11.5-28.5T680-600h120q17 0 28.5 11.5T840-560v40h-60v-20h-80v40h100q17 0 28.5 11.5T840-460v60q0 17-11.5 28.5T800-360H680Zm-520 0q-17 0-28.5-11.5T120-400v-160q0-17 11.5-28.5T160-600h120q17 0 28.5 11.5T320-560v40h-60v-20h-80v120h80v-20h60v40q0 17-11.5 28.5T280-360H160Z" />
  </svg>
)

export { IconCssOutlined as default }
