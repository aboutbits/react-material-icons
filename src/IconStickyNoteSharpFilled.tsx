import React from 'react'
import { IconProps } from './types'

const IconStickyNoteSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-120H120v-720h720v520L640-120Zm-40-80 160-160H600v160ZM440-320h80v-240h120v-80H320v80h120v240Z" />
  </svg>
)

export { IconStickyNoteSharpFilled as default }
