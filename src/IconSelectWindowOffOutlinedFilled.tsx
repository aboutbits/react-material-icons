import React from 'react'
import { IconProps } from './types.js'

export const IconSelectWindowOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M819-28 407-440H160v280h480v-161l80 80v81q0 33-23.5 56.5T640-80H160q-33 0-56.5-23.5T80-160v-360q0-33 23.5-56.5T160-600h80v-7L27-820l57-57L876-85l-57 57Zm-99-327-85-85-160-160h165q33 0 56.5 23.5T720-520v80h80v-280H355L246-829q8-23 28.5-37t45.5-14h480q33 0 56.5 23.5T880-800v360q0 33-23.5 56.5T800-360h-80v5Z" />
  </svg>
)
