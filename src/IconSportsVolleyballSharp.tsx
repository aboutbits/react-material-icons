import React from 'react'
import { IconProps } from './types'

const IconSportsVolleyballSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M782-582q-31-87-101-145.5T520-798v64l262 152ZM320-434l120-70v-294q-32 3-62 14.5T320-756v322Zm-134 78 54-32v-302q-39 44-59.5 98T160-480q0 32 6.5 63.5T186-356Zm134 152 280-160-120-70-254 148q20 25 43 46t51 36Zm160 44q75 0 142-34t112-94l-54-30-264 152q16 3 32 4.5t32 1.5Zm294-196q13-29 19.5-60.5T800-480L520-642v138l254 148ZM480-480Zm0 400q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
  </svg>
)

export { IconSportsVolleyballSharp as default }
