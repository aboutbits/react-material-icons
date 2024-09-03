import React from 'react'
import { IconProps } from './types'

const IconDualScreenOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m240-256 240 96v-544l-240-96v544Zm-30 74q-23-9-36.5-29T160-256v-544q0-33 23.5-56.5T240-880l268 101q23 9 37.5 29.5T560-704v544q0 43-35 66.5T450-86l-240-96Zm270-18v-80h240v-520H240v-80h480q33 0 56.5 23.5T800-800v520q0 33-23.5 56.5T720-200H480Zm-240-56v-544 544Z" />
  </svg>
)

export { IconDualScreenOutlined as default }