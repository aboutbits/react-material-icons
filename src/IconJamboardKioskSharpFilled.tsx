import React from 'react'
import { IconProps } from './types'

const IconJamboardKioskSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120v-80h200v-120H80v-520h800v520H520v120h200v80H240Z" />
  </svg>
)

export { IconJamboardKioskSharpFilled as default }
