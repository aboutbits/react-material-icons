import React from 'react'
import { IconProps } from './types.js'

export const IconPublishedWithChangesSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-82q-76-8-141.5-41.5t-114-87Q136-264 108-333T80-480q0-91 36.5-168T216-780h-96v-80h240v240h-80v-109q-55 44-87.5 108.5T160-480q0 123 80.5 212.5T440-163v81Zm-17-214L254-466l56-56 113 113 227-227 56 57-283 283Zm177 196v-240h80v109q55-45 87.5-109T800-480q0-123-80.5-212.5T520-797v-81q152 15 256 128t104 270q0 91-36.5 168T744-180h96v80H600Z" />
  </svg>
)