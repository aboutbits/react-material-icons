import React from 'react'
import { IconProps } from './types.js'

export const IconPhoneDisabledSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m684-386-58-58q9-11 29.5-40t25.5-40L567-639l37-201h236v42q0 109-39 212T684-386ZM162-120h-42v-235l200-41 116 116q29-18 45.5-29.5T512-332L56-788l56-56 736 736-56 56-222-222q-92 75-197 114.5T162-120Z" />
  </svg>
)
