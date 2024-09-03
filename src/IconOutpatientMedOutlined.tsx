import React from 'react'
import { IconProps } from './types'

const IconOutpatientMedOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m780-340-57-56 44-44H640v-80h126l-43-43 57-57 140 140-140 140ZM80-760v-80h480v80H80Zm180 500h120v-100h100v-120H380v-100H260v100H160v120h100v100ZM120-120q-33 0-56.5-23.5T40-200v-440q0-33 23.5-56.5T120-720h400q33 0 56.5 23.5T600-640v440q0 33-23.5 56.5T520-120H120Zm0-80h400v-440H120v440Zm200-220Z" />
  </svg>
)

export { IconOutpatientMedOutlined as default }
