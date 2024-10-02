import React from 'react'
import { IconProps } from './types'

export const IconFindInPageSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-800h440l200 240v466L618-360q11-17 16.5-37t5.5-43q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47q23 0 43-5.5t37-16.5L784-80H160Zm320-280q-33 0-56.5-23.5T400-440q0-33 23.5-56.5T480-520q33 0 56.5 23.5T560-440q0 33-23.5 56.5T480-360Z" />
  </svg>
)
