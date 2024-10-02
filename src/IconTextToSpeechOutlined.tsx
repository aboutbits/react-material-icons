import React from 'react'
import { IconProps } from './types'

export const IconTextToSpeechOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h326l-80 80H160v640h440v-80h80v80q0 33-23.5 56.5T600-80H160Zm80-160v-80h280v80H240Zm0-120v-80h200v80H240Zm360 0L440-520H320v-200h120l160-160v520Zm80-122v-276q36 21 58 57t22 81q0 45-22 81t-58 57Zm0 172v-84q70-25 115-86.5T840-620q0-78-45-139.5T680-846v-84q104 27 172 112.5T920-620q0 112-68 197.5T680-310Z" />
  </svg>
)
