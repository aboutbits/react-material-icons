import React from 'react'
import { IconProps } from './types'

const IconMarkEmailReadOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M638-80 468-250l56-56 114 114 226-226 56 56L638-80Zm-478-80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v174L639-305 524-420 355-251l91 91H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
  </svg>
)

export { IconMarkEmailReadOutlinedFilled as default }
