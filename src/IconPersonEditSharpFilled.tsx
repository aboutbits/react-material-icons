import React from 'react'
import { IconProps } from './types'

const IconPersonEditSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-120v-123l263-262 123 122-263 263H560Zm-400-40v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q37 0 73 4.5t72 14.5L480-276v116H160Zm663-184 37-39-37-37-38 38 38 38ZM480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z" />
  </svg>
)

export { IconPersonEditSharpFilled as default }
