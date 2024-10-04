import React from 'react'
import { IconProps } from './types'

const IconTsvOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M250-360h60v-180h50v-60H200v60h50v180Zm130 0h120q17 0 28.5-11.5T540-400v-60q0-17-11.5-31.5T500-506h-60v-34h100v-60H420q-17 0-28.5 11.5T380-560v60q0 17 11.5 30.5T420-456h60v36H380v60Zm250 0h60l70-240h-60l-40 138-40-138h-60l70 240ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z" />
  </svg>
)

export { IconTsvOutlinedFilled as default }
