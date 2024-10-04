import React from 'react'
import { IconProps } from './types'

const IconLabelImportantSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m80-160 240-320L80-800h560l240 320-240 320H80Z" />
  </svg>
)

export { IconLabelImportantSharpFilled as default }
