import React from 'react'
import { IconProps } from './types'

export const IconDirectionsSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-360h80v-120h140v100l140-140-140-140v100H320v200ZM480-48 48-480l432-432 432 432L480-48Z" />
  </svg>
)
