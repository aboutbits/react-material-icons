import React from 'react'
import { IconProps } from './types'

export const IconHeapSnapshotLargeOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M580-220q25 0 42.5-17.5T640-280q0-25-17.5-42.5T580-340q-25 0-42.5 17.5T520-280q0 25 17.5 42.5T580-220Zm-202-2 260-260-56-56-260 260 56 56Zm2-198q25 0 42.5-17.5T440-480q0-25-17.5-42.5T380-540q-25 0-42.5 17.5T320-480q0 25 17.5 42.5T380-420ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
  </svg>
)
