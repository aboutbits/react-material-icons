import React from 'react'
import { IconProps } from './types'

const IconResetImageSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-600v-240h80v134q50-62 122.5-98T480-840q118 0 210.5 67T820-600h-87q-34-72-101-116t-152-44q-57 0-107.5 21T284-680h76v80H120Zm120 360h480L570-440 450-280l-90-120-120 160ZM120-80v-400h80v320h560v-320h80v400H120Z" />
  </svg>
)

export { IconResetImageSharpFilled as default }
