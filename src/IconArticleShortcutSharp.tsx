import React from 'react'
import { IconProps } from './types'

const IconArticleShortcutSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-480ZM265-80q-79 0-134.5-55.5T75-270q0-57 29.5-102t77.5-68H80v-80h240v240h-80v-97q-37 8-61 38t-24 69q0 46 32.5 78t77.5 32v80Zm135-40v-80h360v-560H200v160h-80v-240h720v720H400Zm0-160h160v-80H400v80Zm0-160h280v-80H400v80ZM280-600h400v-80H280v80Z" />
  </svg>
)

export { IconArticleShortcutSharp as default }
