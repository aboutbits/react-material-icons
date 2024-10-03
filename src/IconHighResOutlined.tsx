import React from 'react'
import { IconProps } from './types.js'

export const IconHighResOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M180-220h60v-80h24l36 80h60l-36-84q15-9 25.5-23.5T360-360v-40q0-25-17.5-42.5T300-460H180v240Zm220 0h160v-60H460v-30h80v-60h-80v-30h100v-60H400v240Zm200 0h140q17 0 28.5-11.5T780-260v-60q0-17-11.5-28.5T740-360h-80v-40h120v-60H640q-17 0-28.5 11.5T600-420v60q0 17 11.5 28.5T640-320h80v40H600v60ZM240-360v-40h60v40h-60Zm60-140h60v-90h60v90h60v-240h-60v90h-60v-90h-60v240Zm280 0h60v-240h-60v240ZM120-120q-33 0-56.5-23.5T40-200v-560q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120H120Zm0-80h720v-560H120v560Zm0 0v-560 560Z" />
  </svg>
)
