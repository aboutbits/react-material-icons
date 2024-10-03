import React from 'react'
import { IconProps } from './types.js'

export const IconSportsCricketOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-392 488-280q-12 12-28 12t-28-12L92-620q-12-12-12-27t12-27l112-112q12-12 29-12t29 12l338 338q12 12 12 28t-12 28Zm-140 28 56-56-284-284-56 56 284 284ZM744-80 574-250l56-56 170 170-56 56Zm-4-520q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T800-740q0-25-17.5-42.5T740-800q-25 0-42.5 17.5T680-740q0 25 17.5 42.5T740-680Zm0-60ZM346-534Z" />
  </svg>
)
