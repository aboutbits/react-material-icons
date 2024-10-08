import React from 'react'
import { IconProps } from './types'

const IconStickyNoteOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v440L640-120H200Zm240-200h80v-240h120v-80H320v80h120v240Zm160 120 160-160h-80q-33 0-56.5 23.5T600-280v80Z" />
  </svg>
)

export { IconStickyNoteOutlinedFilled as default }
