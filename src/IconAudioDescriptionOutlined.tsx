import React from 'react'
import { IconProps } from './types'

const IconAudioDescriptionOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-320v-240q0-33 23.5-56.5T120-640h80q33 0 56.5 23.5T280-560v240h-80v-80h-80v80H40Zm80-160h80v-80h-80v80Zm240 160v-320h160q33 0 56.5 23.5T600-560v160q0 33-23.5 56.5T520-320H360Zm80-80h80v-160h-80v160Zm274 32-56-57q11-11 16.5-25t5.5-30q0-17-5.5-30.5T658-535l56-58q22 22 34 51t12 62q0 33-12 61.5T714-368Zm113 113-58-55q33-33 52-76.5t19-93.5q0-51-19-94t-52-76l58-56q44 44 68.5 102T920-480q0 66-24.5 123.5T827-255Z" />
  </svg>
)

export { IconAudioDescriptionOutlined as default }
