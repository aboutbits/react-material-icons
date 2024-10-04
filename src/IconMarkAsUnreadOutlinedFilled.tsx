import React from 'react'
import { IconProps } from './types'

const IconMarkAsUnreadOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-280q-33 0-56.5-23.5T80-360v-314q0-15 8.5-29.5T112-726l308-154 302 154q12 6 20.5 19t11.5 27H637L420-790 160-661v381Zm120 160q-33 0-56.5-23.5T200-200v-360q0-33 23.5-56.5T280-640h520q33 0 56.5 23.5T880-560v360q0 33-23.5 56.5T800-120H280Zm260-226 260-134v-80L540-426 280-560v80l260 134Z" />
  </svg>
)

export { IconMarkAsUnreadOutlinedFilled as default }
