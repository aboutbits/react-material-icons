import React from 'react'
import { IconProps } from './types'

const IconMarkAsUnreadSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-280v-430l340-170 392 200H637L420-790 160-661v381H80Zm120 160v-520h680v520H200Zm340-226L280-480v280h520v-280L540-346Zm0-80 260-134H280l260 134Zm260-134H280h520Z" />
  </svg>
)

export { IconMarkAsUnreadSharp as default }
