import React from 'react'
import { IconProps } from './types'

const IconPrintLockSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-120v-200h40v-40q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360v40h40v200H640Zm80-200h80v-40q0-17-11.5-28.5T760-400q-17 0-28.5 11.5T720-360v40ZM240-120v-160H80v-360h800v150q-27-14-56.5-22t-60.5-8q-78 0-141.5 44T530-360H320v160h204q7 22 17 42t24 38H240Zm0-560v-160h480v160H240Z" />
  </svg>
)

export { IconPrintLockSharpFilled as default }
