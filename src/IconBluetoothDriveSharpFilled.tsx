import React from 'react'
import { IconProps } from './types'

const IconBluetoothDriveSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M260-320q25 0 42.5-17.5T320-380q0-25-17.5-42.5T260-440q-25 0-42.5 17.5T200-380q0 25 17.5 42.5T260-320Zm360 0q25 0 42.5-17.5T680-380q0-25-17.5-42.5T620-440q-25 0-42.5 17.5T560-380q0 25 17.5 42.5T620-320ZM80-120v-360l98-280h422v80H234l-42 120h408v80h200v360H680v-80H200v80H80Zm666-400v-152l-92 92-28-28 112-112-112-112 28-28 92 92v-152h20l114 116-86 84 86 86-114 114h-20Zm40-248 38-36-38-38v74Zm0 172 38-38-38-38v76Z" />
  </svg>
)

export { IconBluetoothDriveSharpFilled as default }
