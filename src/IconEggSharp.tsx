import React from 'react'
import { IconProps } from './types'

export const IconEggSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-240h40v-80h-40q-50 0-85-35t-35-85v-40h-80v40q0 83 58.5 141.5T520-240Zm-40 120q-117 0-198.5-81.5T200-400q0-77 25.5-155t66-141.5Q332-760 382-800t98-40q49 0 98.5 40t90 103.5Q709-633 734.5-555T760-400q0 117-81.5 198.5T480-120Zm0-80q83 0 141.5-58.5T680-400q0-57-19.5-120t-49-116.5Q582-690 547-725t-67-35q-31 0-66.5 35t-65 88.5Q319-583 299.5-520T280-400q0 83 58.5 141.5T480-200Zm0-280Z" />
  </svg>
)
