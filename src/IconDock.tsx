import React from 'react'
import { IconProps } from './types'

const IconDock: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{props.title === undefined ? 'IconDock' : props.title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M8 23h8v-2H8v2zm8-21.99L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM16 15H8V5h8v10z" />
  </svg>
)

export { IconDock as default }
