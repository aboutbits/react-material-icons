import React from 'react'
import { IconProps } from './types'

const IconViewAgendaSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-320h720v320H120Zm80-80h560v-160H200v160Zm-80-320v-320h720v320H120Zm80-80h560v-160H200v160Zm0 240v160-160Zm0-400v160-160Z" />
  </svg>
)

export { IconViewAgendaSharp as default }
