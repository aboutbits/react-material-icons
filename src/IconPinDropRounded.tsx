import React from 'react'
import { IconProps } from './types'

const IconPinDropRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 82q-12 0-24-4t-22-12q-118-94-176-183.5T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 86-58 175.5T526-235q-10 8-22 12t-24 4Zm0-301q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM240-80q-17 0-28.5-11.5T200-120q0-17 11.5-28.5T240-160h480q17 0 28.5 11.5T760-120q0 17-11.5 28.5T720-80H240Zm240-520Z" />
  </svg>
)

export { IconPinDropRounded as default }
