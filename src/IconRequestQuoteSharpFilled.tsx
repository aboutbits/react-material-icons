import React from 'react'
import { IconProps } from './types'

const IconRequestQuoteSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-200h80v-40h80v-200H440v-40h160v-80h-80v-40h-80v40h-80v200h160v40H360v80h80v40ZM160-80v-800h440l200 200v600H160Zm80-80h480v-480H560v-160H240v640Zm0-640h320v160h160L560-800v160h160v480H240v-640Z" />
  </svg>
)

export { IconRequestQuoteSharpFilled as default }
