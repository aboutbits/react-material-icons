import React from 'react'
import { IconProps } from './types'

const IconHdrPlusOffOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-800q-45 0-86 11t-77 32l-58-58q47-32 103-48.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 62-17 118t-49 103l-58-58q21-36 32.5-77t11.5-86q0-134-93-227t-227-93Zm0 207-60-60v-67h60v127Zm220-67v120q0 24-18 42t-42 18h-47l-73-73v-167h120q24 0 42 18t18 42ZM580-540h60v-120h-60v120ZM420-340v-40h-80v40h80Zm117-197ZM340-200h-60v-240h140q25 0 42.5 17.5T480-380v40q0 18-10.5 32.5T444-284l36 84h-62l-34-80h-44v80Zm-60-424 60 60v84h-60v-144Zm143 201ZM171-733l56 57q-32 42-49.5 90.5T160-480q0 134 93 227t227 93q57 0 106-17.5t91-49.5l56 56q-51 44-115.5 67.5T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-73 24-137.5T171-733ZM28-820l56-56L876-84l-56 56L28-820Z" />
  </svg>
)

export { IconHdrPlusOffOutlined as default }