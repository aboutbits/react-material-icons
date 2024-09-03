import React from 'react'
import { IconProps } from './types'

const IconDonutSmallOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M521-878q143 14 243.5 114.5T879-520H593q-9-26-27.5-45.5T521-594v-284Zm80 102v136q11 9 21 19t19 21h136q-24-60-70-106t-106-70ZM441-878v284q-36 13-58 44.5T361-480q0 38 22 68.5t58 43.5v286Q287-97 184-211T81-480q0-155 103-269t257-129Zm-80 102q-91 35-145.5 116T161-480q0 99 54.5 180T361-182v-138q-38-29-59-70.5T281-480q0-48 21-89.5t59-70.5v-136Zm232 336h286q-14 143-114.5 243.5T521-82v-286q26-9 44.5-27.5T593-440Zm48 80q-8 11-18.5 21T601-320v136q60-24 106-70t70-106H641ZM281-479Zm360-121Zm0 240Z" />
  </svg>
)

export { IconDonutSmallOutlined as default }
