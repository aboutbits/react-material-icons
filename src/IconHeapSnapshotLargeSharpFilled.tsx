import React from 'react'
import { IconProps } from './types.js'

export const IconHeapSnapshotLargeSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M580-220q25 0 42.5-17.5T640-280q0-25-17.5-42.5T580-340q-25 0-42.5 17.5T520-280q0 25 17.5 42.5T580-220Zm-202-2 260-260-56-56-260 260 56 56Zm2-198q25 0 42.5-17.5T440-480q0-25-17.5-42.5T380-540q-25 0-42.5 17.5T320-480q0 25 17.5 42.5T380-420ZM160-80v-800h400l240 240v560H160Zm360-520h200L520-800v200Z" />
  </svg>
)