import React from 'react'
import { IconProps } from './types'

export const IconEncryptedOffSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m430-418-10 58h68l-58-58ZM792-56 662-186q-38 39-84.5 65.5T480-80q-139-35-229.5-159.5T160-516v-172L56-792l56-56 736 736-56 56Zm-38-262L551-522q5-8 7-17.5t2-20.5q0-33-23.5-56.5T480-640q-11 0-20 2t-17 7L272-802l208-78 320 120v244q0 51-11.5 101T754-318Z" />
  </svg>
)
