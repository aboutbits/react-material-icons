import React from 'react'
import { IconProps } from './types'

const IconSignalCellular4Bar: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M2 22h20V2z" />
  </svg>
)

export { IconSignalCellular4Bar as default }
