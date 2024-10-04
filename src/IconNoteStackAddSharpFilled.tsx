import React from 'react'
import { IconProps } from './types'

const IconNoteStackAddSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-80v-601h600v401L680-80H280ZM172-197 67-788l591-105 24 133H200v558l-28 5Zm368-23h80v-120h120v-80H620v-120h-80v120H420v80h120v120Z" />
  </svg>
)

export { IconNoteStackAddSharpFilled as default }
