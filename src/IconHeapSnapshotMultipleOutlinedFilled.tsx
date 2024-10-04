import React from 'react'
import { IconProps } from './types.js'

export const IconHeapSnapshotMultipleOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M450-500q21 0 35.5-14.5T500-550q0-21-14.5-35.5T450-600q-21 0-35.5 14.5T400-550q0 21 14.5 35.5T450-500Zm7 180 223-223-57-57-223 223 57 57Zm173 0q21 0 35.5-14.5T680-370q0-21-14.5-35.5T630-420q-21 0-35.5 14.5T580-370q0 21 14.5 35.5T630-320Zm130 120H320q-33 0-56.5-23.5T240-280v-560q0-33 23.5-56.5T320-920h280l240 240v400q0 33-23.5 56.5T760-200ZM560-640h200L560-840v200ZM160-40q-33 0-56.5-23.5T80-120v-560h80v560h440v80H160Z" />
  </svg>
)