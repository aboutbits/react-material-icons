import React from 'react'
import { IconProps } from './types'

const IconAccountChildOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880Zm-80 200q0 33 23.5 56.5T480-600q33 0 56.5-23.5T560-680q0-33-23.5-56.5T480-760q-33 0-56.5 23.5T400-680Zm80 120q-53 0-116.5 26T300-460v160q0 44 63 74t137 24v-80q-35 2-66-5t-54-21q5-23 35-37.5t65-14.5q35 0 67.5 16t32.5 42v82q44-16 62-38.5t18-41.5v-160q0-48-63.5-74T480-560Zm0 180q-21 0-35.5-14.5T430-430q0-21 14.5-35.5T480-480q21 0 35.5 14.5T530-430q0 21-14.5 35.5T480-380Z" />
  </svg>
)

export { IconAccountChildOutlinedFilled as default }
