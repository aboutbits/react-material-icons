import React from 'react'
import { IconProps } from './types.js'

export const IconSmbShareOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M485-440h163q26 0 44-18t18-44q0-26-18-44.5T648-565h-2q-5-32-29-53.5T560-640q-26 0-47 13.5T481-590q-30 2-50.5 23.5T410-515q0 30 21.5 52.5T485-440ZM120-120q-33 0-56.5-23.5T40-200v-520h80v520h680v80H120Zm160-160q-33 0-56.5-23.5T200-360v-440q0-33 23.5-56.5T280-880h200l80 80h280q33 0 56.5 23.5T920-720v360q0 33-23.5 56.5T840-280H280Zm0-80h560v-360H527l-80-80H280v440Zm0 0v-440 440Z" />
  </svg>
)
