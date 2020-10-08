import React from 'react'
import { IconProps } from './types'

const IconFiberManualRecord: React.FC<IconProps> = ({
  title = 'IconFiberManualRecord',
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M24 24H0V0h24v24z" fill="none" />
    <circle cx="12" cy="12" r="8" />
  </svg>
)

export { IconFiberManualRecord as default }
