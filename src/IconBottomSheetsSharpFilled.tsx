import React from 'react'
import { IconProps } from './types'

const IconBottomSheetsSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm80-360h560v-280H200v280Z" />
  </svg>
)

export { IconBottomSheetsSharpFilled as default }
