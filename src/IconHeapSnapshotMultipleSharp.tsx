import React from 'react'
import { IconProps } from './types'

const IconHeapSnapshotMultipleSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M450-500q21 0 35.5-14.5T500-550q0-21-14.5-35.5T450-600q-21 0-35.5 14.5T400-550q0 21 14.5 35.5T450-500Zm7 180 223-223-57-57-223 223 57 57Zm173 0q21 0 35.5-14.5T680-370q0-21-14.5-35.5T630-420q-21 0-35.5 14.5T580-370q0 21 14.5 35.5T630-320ZM240-200v-720h360l240 240v480H240Zm320-440v-200H320v560h440v-360H560ZM80-40v-640h80v560h440v80H80Zm240-800v200-200 560-560Z" />
  </svg>
)

export { IconHeapSnapshotMultipleSharp as default }
