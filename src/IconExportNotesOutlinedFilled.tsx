import React from 'react'
import { IconProps } from './types'

export const IconExportNotesOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m648-140 112-112v92h40v-160H640v40h92L620-168l28 28Zm72 100q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM280-600h400v-80H280v80Zm187 480H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v268q-29-14-58.5-21t-61.5-7q-11 0-20.5.5T680-517v-3H280v80h245q-18 17-32.5 37T467-360H280v80h163q-2 10-2.5 19.5T440-240q0 33 6 61.5t21 58.5Z" />
  </svg>
)
