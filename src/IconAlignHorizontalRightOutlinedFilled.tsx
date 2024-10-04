import React from 'react'
import { IconProps } from './types'

const IconAlignHorizontalRightOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M800-80v-800h80v800h-80ZM320-280v-120h400v120H320ZM80-560v-120h640v120H80Z" />
  </svg>
)

export { IconAlignHorizontalRightOutlinedFilled as default }
