import React from 'react'
import { IconProps } from './types'

const IconMultimodalHandEyeSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M263-40 24-280l64-66 112 33v-367h80v320h40v-160h80v160h40v-120h80v120h40v-40h80v200q0 66-47 113T480-40H263Zm377-480q-91 0-168-48T360-700q35-84 112-132t168-48q91 0 168 48t112 132q-35 84-112 132t-168 48Zm0-80q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm0-40q-25 0-42.5-17.5T580-700q0-25 17.5-42.5T640-760q25 0 42.5 17.5T700-700q0 25-17.5 42.5T640-640Z" />
  </svg>
)

export { IconMultimodalHandEyeSharpFilled as default }
