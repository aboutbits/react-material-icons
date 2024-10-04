import React from 'react'
import { IconProps } from './types'

const IconShareWindowsSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-360v-320h406L583-783l57-57 200 200-200 200-57-56 103-104H360v240h-80ZM120-120v-680h80v600h480v-160h80v240H120Z" />
  </svg>
)

export { IconShareWindowsSharp as default }
