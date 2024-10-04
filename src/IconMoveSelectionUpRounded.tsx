import React from 'react'
import { IconProps } from './types'

const IconMoveSelectionUpRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-400q-33 0-56.5-23.5T240-480v-320q0-33 23.5-56.5T320-880h320q33 0 56.5 23.5T720-800v320q0 33-23.5 56.5T640-400H320Zm0-80h320v-320H320v320Zm-40 240q-17 0-28.5-11.5T240-280q0-17 11.5-28.5T280-320q17 0 28.5 11.5T320-280q0 17-11.5 28.5T280-240Zm0 160q-17 0-28.5-11.5T240-120q0-17 11.5-28.5T280-160q17 0 28.5 11.5T320-120q0 17-11.5 28.5T280-80Zm200 0q-17 0-28.5-11.5T440-120q0-17 11.5-28.5T480-160q17 0 28.5 11.5T520-120q0 17-11.5 28.5T480-80Zm200 0q-17 0-28.5-11.5T640-120q0-17 11.5-28.5T680-160q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80Zm0-160q-17 0-28.5-11.5T640-280q0-17 11.5-28.5T680-320q17 0 28.5 11.5T720-280q0 17-11.5 28.5T680-240ZM480-640Z" />
  </svg>
)

export { IconMoveSelectionUpRounded as default }
