import React from 'react'
import { IconProps } from './types'

const IconArrowLeft: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M14 7l-5 5 5 5V7z" />
    <path d="M24 0v24H0V0h24z" fill="none" />
  </svg>
)

export { IconArrowLeft as default }
