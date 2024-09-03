import React from 'react'
import { IconProps } from './types'

const IconAllMatchOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m80-160 240-320L80-800h520q19 0 36 8.5t28 23.5l216 288-5 7q-35-23-74-35t-81-12q-117 0-198.5 81.5T440-241q0 20 3 40.5t9 40.5H80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-29-110 139-138-42-42-97 95-39-39-42 43 81 81Z" />
  </svg>
)

export { IconAllMatchOutlinedFilled as default }
