import React from 'react'
import { IconProps } from './types'

const IconFilter7SharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-360h80l160-320v-80H440v80h160L440-360ZM240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Z" />
  </svg>
)

export { IconFilter7SharpFilled as default }
