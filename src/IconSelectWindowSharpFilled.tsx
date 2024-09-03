import React from 'react'
import { IconProps } from './types'

const IconSelectWindowSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-520h160v-280h640v520H720v280H80Zm80-80h480v-280H160v280Zm560-280h80v-280H320v120h400v160Z" />
  </svg>
)

export { IconSelectWindowSharpFilled as default }
