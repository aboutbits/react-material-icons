import React from 'react'
import { IconProps } from './types'

const Icon1xMobiledataBadgeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280h80v-400H200v80h80v320Zm180 0h80l70-127 70 127h80L650-480l110-200h-80l-70 127-70-127h-80l110 200-110 200ZM40-120v-720h880v720H40Zm80-80h720v-560H120v560Zm0 0v-560 560Z" />
  </svg>
)

export { Icon1xMobiledataBadgeSharp as default }
