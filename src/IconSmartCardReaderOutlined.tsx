import React from 'react'
import { IconProps } from './types'

export const IconSmartCardReaderOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-120q0-33 23.5-56.5T160-280h640q33 0 56.5 23.5T880-200v120H80Zm80-80h640v-40H160v40Zm40-180v-460q0-33 23.5-56.5T280-880h400q33 0 56.5 23.5T760-800v460h-80v-460H280v460h-80Zm120-60h23q44 0 70.5-44T440-560q0-72-26.5-116T343-720h-23v320Zm240-80q33 0 56.5-23.5T640-560q0-33-23.5-56.5T560-640q-33 0-56.5 23.5T480-560q0 33 23.5 56.5T560-480Zm-80 320Zm0-410Z" />
  </svg>
)
