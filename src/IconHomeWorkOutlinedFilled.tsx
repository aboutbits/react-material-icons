import React from 'react'
import { IconProps } from './types'

const IconHomeWorkOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-600h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80ZM40-120v-400l280-200 280 200v400H400v-240H240v240H40Zm640 0v-440L400-762v-78h520v720H680Z" />
  </svg>
)

export { IconHomeWorkOutlinedFilled as default }
