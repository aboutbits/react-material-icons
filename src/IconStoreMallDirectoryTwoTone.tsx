import React from 'react'
import { IconProps } from './types'

const IconStoreMallDirectoryTwoTone: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5.64 9l-.6 3h13.92l-.6-3z" opacity=".3" />
    <path d="M4 7l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5H4zm8 11H6v-4h6v4zm-6.96-6l.6-3h12.72l.6 3H5.04zM4 4h16v2H4z" />
  </svg>
)

export { IconStoreMallDirectoryTwoTone as default }
