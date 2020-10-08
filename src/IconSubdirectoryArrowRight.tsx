import React from 'react'
import { IconProps } from './types'

const IconSubdirectoryArrowRight: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>
      {props.title === undefined ? 'IconSubdirectoryArrowRight' : props.title}
    </title>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z" />
  </svg>
)

export { IconSubdirectoryArrowRight as default }
