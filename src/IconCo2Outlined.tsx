import React from 'react'
import { IconProps } from './types'

export const IconCo2Outlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-360q-17 0-28.5-11.5T400-400v-160q0-17 11.5-28.5T440-600h120q17 0 28.5 11.5T600-560v160q0 17-11.5 28.5T560-360H440Zm20-60h80v-120h-80v120Zm-300 60q-17 0-28.5-11.5T120-400v-160q0-17 11.5-28.5T160-600h120q17 0 28.5 11.5T320-560v40h-60v-20h-80v120h80v-20h60v40q0 17-11.5 28.5T280-360H160Zm520 120v-100q0-17 11.5-28.5T720-380h80v-40H680v-60h140q17 0 28.5 11.5T860-440v60q0 17-11.5 28.5T820-340h-80v40h120v60H680Z" />
  </svg>
)
