import React from 'react'
import { IconProps } from './types'

const IconUploadSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM160-160v-200h80v120h480v-120h80v200H160Z" />
  </svg>
)

export { IconUploadSharpFilled as default }
