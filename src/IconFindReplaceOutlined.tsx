import React from 'react'
import { IconProps } from './types'

const IconFindReplaceOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M164-560q14-103 91.5-171.5T440-800q59 0 110.5 22.5T640-716v-84h80v240H480v-80h120q-29-36-69.5-58T440-720q-72 0-127 45.5T244-560h-80Zm620 440L608-296q-36 27-78.5 41.5T440-240q-59 0-110.5-22.5T240-324v84h-80v-240h240v80H280q29 36 69.5 58t90.5 22q72 0 127-45.5T636-480h80q-5 36-18 67.5T664-352l176 176-56 56Z" />
  </svg>
)

export { IconFindReplaceOutlined as default }
