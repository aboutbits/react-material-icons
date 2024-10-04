import React from 'react'
import { IconProps } from './types.js'

export const IconTextFieldsRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M340-160q-25 0-42.5-17.5T280-220v-460H140q-25 0-42.5-17.5T80-740q0-25 17.5-42.5T140-800h400q25 0 42.5 17.5T600-740q0 25-17.5 42.5T540-680H400v460q0 25-17.5 42.5T340-160Zm360 0q-25 0-42.5-17.5T640-220v-260h-60q-25 0-42.5-17.5T520-540q0-25 17.5-42.5T580-600h240q25 0 42.5 17.5T880-540q0 25-17.5 42.5T820-480h-60v260q0 25-17.5 42.5T700-160Z" />
  </svg>
)