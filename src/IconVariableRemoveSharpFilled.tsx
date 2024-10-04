import React from 'react'
import { IconProps } from './types'

const IconVariableRemoveSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-280v-400h720v128q-14-4-29-6t-31-2q-91 0-155.5 64T560-340q0 16 2 31t6 29H120Zm576 80-56-56 84-84-84-84 56-56 84 84 84-84 56 56-83 84 83 84-56 56-84-83-84 83Z" />
  </svg>
)

export { IconVariableRemoveSharpFilled as default }
