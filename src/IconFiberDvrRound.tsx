import React from 'react'
import { IconProps } from './types'

const IconFiberDvrRound: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M4.5 10.5h2v3h-2zm13 0h2v1h-2zM21 3H3c-1.11 0-2 .89-2 2v14c0 1.1.89 2 2 2h18c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zM8 13.5c0 .83-.67 1.5-1.5 1.5h-3c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5h3c.83 0 1.5.67 1.5 1.5v3zm6.1-3.58l-1.27 4.36c-.12.43-.52.72-.96.72s-.84-.29-.96-.72L9.64 9.92c-.14-.46.21-.92.69-.92.32 0 .6.21.69.52l.85 2.91.85-2.91c.09-.31.37-.52.69-.52.48 0 .83.46.69.92zM21 11.5c0 .6-.4 1.15-.9 1.4l.63 1.48c.19.45-.14.96-.63.96-.28 0-.53-.16-.63-.42L18.65 13H17.5v1.31c0 .38-.31.69-.69.69h-.12c-.38 0-.69-.31-.69-.69V9.64c0-.35.29-.64.64-.64h2.86c.83 0 1.5.67 1.5 1.5v1z" />
  </svg>
)

export { IconFiberDvrRound as default }
