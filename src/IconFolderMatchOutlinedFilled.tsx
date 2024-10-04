import React from 'react'
import { IconProps } from './types.js'

export const IconFolderMatchOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-184q-81-32-133.5-100.5T163-440h81q9 53 39 97t77 71v88ZM500-80q-25 0-42.5-17.5T440-140v-240q0-25 17.5-42.5T500-440h88q15 0 28.5 7t21.5 20l22 33h160q25 0 42.5 17.5T880-320v180q0 25-17.5 42.5T820-80H500ZM140-520q-25 0-42.5-17.5T80-580v-240q0-25 17.5-42.5T140-880h88q15 0 28.5 7t21.5 20l22 33h160q25 0 42.5 17.5T520-760v180q0 25-17.5 42.5T460-520H140Zm580 40q0-65-32-120.5T600-688v-88q91 37 145.5 117.5T800-480h-80Z" />
  </svg>
)