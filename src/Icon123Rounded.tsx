import React from 'react'
import { IconProps } from './types'

const Icon123Rounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M220-540h-30q-13 0-21.5-8.5T160-570q0-13 8.5-21.5T190-600h60q13 0 21.5 8.5T280-570v180q0 13-8.5 21.5T250-360q-13 0-21.5-8.5T220-390v-150Zm140 150v-70q0-17 11.5-28.5T400-500h80v-40h-90q-13 0-21.5-8.5T360-570q0-13 8.5-21.5T390-600h110q17 0 28.5 11.5T540-560v60q0 17-11.5 28.5T500-460h-80v40h90q13 0 21.5 8.5T540-390q0 13-8.5 21.5T510-360H390q-13 0-21.5-8.5T360-390Zm380 30H630q-13 0-21.5-8.5T600-390q0-13 8.5-21.5T630-420h90v-40h-60q-8 0-14-6t-6-14q0-8 6-14t14-6h60v-40h-90q-13 0-21.5-8.5T600-570q0-13 8.5-21.5T630-600h110q17 0 28.5 11.5T780-560v160q0 17-11.5 28.5T740-360Z" />
  </svg>
)

export { Icon123Rounded as default }
