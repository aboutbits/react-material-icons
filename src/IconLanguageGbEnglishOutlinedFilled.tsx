import React from 'react'
import { IconProps } from './types.js'

export const IconLanguageGbEnglishOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-360h160v-80H600v80Zm0-160h160v-80H600v80ZM200-280q-33 0-56.5-23.5T120-360v-240q0-33 23.5-56.5T200-680h160q33 0 56.5 23.5T440-600H200v240h160v-80h-80v-80h160v160q0 33-23.5 56.5T360-280H200Zm320 0v-400h240q33 0 56.5 23.5T840-600v60q0 25-17.5 42.5T780-480q25 0 42.5 17.5T840-420v60q0 33-23.5 56.5T760-280H520Z" />
  </svg>
)