import React from 'react'
import { IconProps } from './types'

const IconEdgesensorLowSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-400v-280h80v280H80Zm720 120v-280h80v280h-80ZM240-80v-800h480v800H240Zm80-200h320v-400H320v400Z" />
  </svg>
)

export { IconEdgesensorLowSharpFilled as default }
