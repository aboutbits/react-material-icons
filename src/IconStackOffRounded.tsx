import React from 'react'
import { IconProps } from './types'

const IconStackOffRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m880-194-80-80v-286H514l-80-80h366q33 0 56.5 23.5T880-560v366ZM274-800l-80-80h366q33 0 56.5 23.5T640-800v80h-80v-80H274Zm383 383ZM400-160h286L400-446v286Zm0 80q-34 0-57-23t-23-57v-366L160-686v286h80v80h-80q-34 0-57-23t-23-57v-366l-29-29q-12-12-11.5-28.5T52-852q12-12 28.5-12t28.5 12l743 744q12 12 12 28t-12 28q-12 12-28.5 12T795-52l-29-28H400Zm143-223Z" />
  </svg>
)

export { IconStackOffRounded as default }
