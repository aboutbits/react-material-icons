import React from 'react'
import { IconProps } from './types'

const IconCallEndSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M161-280 16-421l40-41q87-89 198.5-133.5T480-640q114 0 225 44.5T904-462l40 41-145 141-159-120v-134q-38-12-78-19t-82-7q-42 0-82 7t-78 19v134L161-280Z" />
  </svg>
)

export { IconCallEndSharpFilled as default }
