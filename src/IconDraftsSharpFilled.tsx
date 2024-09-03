import React from 'react'
import { IconProps } from './types'

const IconDraftsSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-920 400 239v561H80v-561l400-239Zm0 466 312-186-312-186-312 186 312 186Z" />
  </svg>
)

export { IconDraftsSharpFilled as default }
