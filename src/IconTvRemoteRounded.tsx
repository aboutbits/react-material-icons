import React from 'react'
import { IconProps } from './types'

export const IconTvRemoteRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-120h240v-200q-25 19-55.5 29.5T480-280q-34 0-64.5-10.5T360-320v200Zm120-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM360-640q25-19 55.5-29.5T480-680q34 0 64.5 10.5T600-640v-200H360v200Zm0 600q-33 0-56.5-23.5T280-120v-720q0-33 23.5-56.5T360-920h240q33 0 56.5 23.5T680-840v720q0 33-23.5 56.5T600-40H360Zm120-380q-25 0-42.5-17.5T420-480q0-25 17.5-42.5T480-540q25 0 42.5 17.5T540-480q0 25-17.5 42.5T480-420Zm0-300q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Zm0 440Zm0-400Z" />
  </svg>
)
