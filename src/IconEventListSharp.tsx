import React from 'react'
import { IconProps } from './types'

const IconEventListSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-120v-320h320v320H560Zm80-80h160v-160H640v160ZM80-240v-80h360v80H80Zm480-280v-320h320v320H560Zm80-80h160v-160H640v160ZM80-640v-80h360v80H80Zm640 360Zm0-400Z" />
  </svg>
)

export { IconEventListSharp as default }
