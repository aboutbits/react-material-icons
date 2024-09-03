import React from 'react'
import { IconProps } from './types'

const IconPackageSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m400-570 80-40 80 40v-190H400v190ZM280-280v-80h200v80H280ZM120-120v-720h720v720H120Zm80-640v560-560Zm0 560h560v-560H640v320l-160-80-160 80v-320H200v560Z" />
  </svg>
)

export { IconPackageSharp as default }
