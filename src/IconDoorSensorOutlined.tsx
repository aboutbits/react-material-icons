import React from 'react'
import { IconProps } from './types'

const IconDoorSensorOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-360v-400 560-160Zm-80 40h80v120h240v-560H360v360h-80v-360q0-33 23.5-56.5T360-840h240q33 0 56.5 23.5T680-760v560q0 33-23.5 56.5T600-120H360q-33 0-56.5-23.5T280-200v-120Zm200-240q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm320-40q-17 0-28.5-11.5T760-640v-160q0-17 11.5-28.5T800-840q17 0 28.5 11.5T840-800v160q0 17-11.5 28.5T800-600ZM200-320q-17 0-28.5-11.5T160-360q0-17 11.5-28.5T200-400h280q17 0 28.5 11.5T520-360q0 17-11.5 28.5T480-320H200Z" />
  </svg>
)

export { IconDoorSensorOutlined as default }