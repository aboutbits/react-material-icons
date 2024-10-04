import React from 'react'
import { IconProps } from './types'

const IconSpo2Outlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-160q-17 0-28.5-11.5T440-200v-160q0-17 11.5-28.5T480-400h100q17 0 28.5 11.5T620-360v160q0 17-11.5 28.5T580-160H480Zm20-60h60v-120h-60v120ZM680-80v-110q0-17 11.5-28.5T720-230h80v-30H680v-60h140q17 0 28.5 11.5T860-280v70q0 17-11.5 28.5T820-170h-80v30h120v60H680Zm-320-2Q237-96 158.5-187.5T80-408q0-100 79.5-217.5T400-880q132 112 209.5 212T710-480h-83q-22-63-79-137T400-774Q281-665 220.5-573T160-408q0 96 55.5 163.5T360-163v81Zm34-326Z" />
  </svg>
)

export { IconSpo2Outlined as default }
