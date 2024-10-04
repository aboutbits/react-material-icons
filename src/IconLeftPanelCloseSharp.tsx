import React from 'react'
import { IconProps } from './types'

const IconLeftPanelCloseSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M660-320v-320L500-480l160 160ZM200-200h120v-560H200v560Zm200 0h360v-560H400v560Zm-80 0H200h120Zm-200 80v-720h720v720H120Z" />
  </svg>
)

export { IconLeftPanelCloseSharp as default }
