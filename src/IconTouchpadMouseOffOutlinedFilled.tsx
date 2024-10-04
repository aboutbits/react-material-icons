import React from 'react'
import { IconProps } from './types'

const IconTouchpadMouseOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h1l236 236q-18 32-27.5 68.5T360-420v120q0 36 8.5 72t25.5 68H160Zm500-560q-63 0-118 24.5T446-629L275-800h525q33 0 56.5 23.5T880-720v96q-43-47-99.5-71.5T660-720Zm40 280v-197q75 13 126 67.5T880-440H700Zm-80-197v182L500-575q24-24 54.5-40t65.5-22Zm242 424L715-360h165v60q0 23-5 45t-13 42ZM660-80q-92 0-156-64t-64-156v-60h47L27-820l57-57L876-85l-57 57-70-70q-20 9-42.5 13.5T660-80Z" />
  </svg>
)

export { IconTouchpadMouseOffOutlinedFilled as default }
