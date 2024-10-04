import React from 'react'
import { IconProps } from './types'

const IconViewAgendaSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-320h720v320H120Zm0-400v-320h720v320H120Z" />
  </svg>
)

export { IconViewAgendaSharpFilled as default }
