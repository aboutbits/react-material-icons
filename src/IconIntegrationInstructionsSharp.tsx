import React from 'react'
import { IconProps } from './types'

export const IconIntegrationInstructionsSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m384-336 56-58-86-86 86-86-56-58-144 144 144 144Zm192 0 144-144-144-144-56 58 86 86-86 86 56 58ZM120-120v-720h248q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h248v720H120Zm80-80h560v-560H200v560Zm280-590q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z" />
  </svg>
)
