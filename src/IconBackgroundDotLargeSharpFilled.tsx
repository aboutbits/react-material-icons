import React from 'react'
import { IconProps } from './types.js'

export const IconBackgroundDotLargeSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M340-280q25 0 42.5-17.5T400-340q0-25-17.5-42.5T340-400q-25 0-42.5 17.5T280-340q0 25 17.5 42.5T340-280Zm0-280q25 0 42.5-17.5T400-620q0-25-17.5-42.5T340-680q-25 0-42.5 17.5T280-620q0 25 17.5 42.5T340-560Zm280 280q25 0 42.5-17.5T680-340q0-25-17.5-42.5T620-400q-25 0-42.5 17.5T560-340q0 25 17.5 42.5T620-280Zm0-280q25 0 42.5-17.5T680-620q0-25-17.5-42.5T620-680q-25 0-42.5 17.5T560-620q0 25 17.5 42.5T620-560ZM120-120v-720h720v720H120Z" />
  </svg>
)
