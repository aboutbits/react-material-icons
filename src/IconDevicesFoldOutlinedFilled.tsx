import React from 'react'
import { IconProps } from './types'

export const IconDevicesFoldOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-120q-33 0-56.5-23.5T400-200v-589q0-24 13-43.5t35-29.5l120-52q40-17 76 6.5t36 67.5h120q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H480Zm107-80h213v-560H680v467q0 24-13 44.5T632-219l-45 19ZM80-760v-80h80v80H80Zm0 640v-80h80v80H80Zm0-160v-80h80v80H80Zm0-160v-80h80v80H80Zm0-160v-80h80v80H80Zm160-160v-80h80v80h-80Zm0 640v-80h80v80h-80Z" />
  </svg>
)
