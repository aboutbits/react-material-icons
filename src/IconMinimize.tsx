import React from 'react'
import { IconProps } from './types'

const IconMinimize: React.FC<IconProps> = ({
  title = 'IconMinimize',
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M6 19h12v2H6z" />
  </svg>
)

export { IconMinimize as default }
