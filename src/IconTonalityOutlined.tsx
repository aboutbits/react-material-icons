import React from 'react'
import { IconProps } from './types'

const IconTonalityOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-636q-121 15-200.5 106T160-480q0 121 79.5 212T440-162Zm80 0q30-5 59-13.5t55-24.5H520v38Zm0-118h210q8-9 14-19t12-21H520v40Zm0-120h270l4-20 4-20H520v40Zm0-120h278l-4-20-4-20H520v40Zm0-120h236q-6-11-12-21t-14-19H520v40Zm0-120h114q-26-16-55-24.5T520-798v38Z" />
  </svg>
)

export { IconTonalityOutlined as default }
