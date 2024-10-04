import React from 'react'
import { IconProps } from './types'

const IconMarkunreadMailboxSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-560h160v-240h320v160H320v320h80v-240h480v560H80Z" />
  </svg>
)

export { IconMarkunreadMailboxSharpFilled as default }
