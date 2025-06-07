import React from 'react'
import { IconProps } from './types.js'

export const IconRemoveModeratorSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M754-318 272-802l208-78 320 120v244q0 51-11.5 101T754-318Zm38 262L662-186q-38 39-84.5 65.5T480-80q-139-35-229.5-159.5T160-516v-172L56-792l56-56 736 736-56 56Z" />
  </svg>
)
