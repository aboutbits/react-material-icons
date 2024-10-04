import React from 'react'
import { IconProps } from './types'

const IconCameraVideoOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M371-200h218l-20-80H391l-20 80Zm-11-160h240q83 0 141.5-58.5T800-560q0-83-58.5-141.5T600-760H360q-83 0-141.5 58.5T160-560q0 83 58.5 141.5T360-360Zm120-120q-33 0-56.5-23.5T400-560q0-33 23.5-56.5T480-640q33 0 56.5 23.5T560-560q0 33-23.5 56.5T480-480ZM260-600q17 0 28.5-11.5T300-640q0-17-11.5-28.5T260-680q-17 0-28.5 11.5T220-640q0 17 11.5 28.5T260-600ZM160-120v-80h129l21-84q-99-17-164.5-94.5T80-560q0-117 81.5-198.5T360-840h240q117 0 198.5 81.5T880-560q0 104-65.5 181.5T650-284l21 84h129v80H160Zm320-280q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160ZM371-200h218-218Z" />
  </svg>
)

export { IconCameraVideoOutlined as default }
