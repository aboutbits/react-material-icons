import React from 'react'
import { IconProps } from './types'

const IconKeyboardPreviousLanguageOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm160-120h320v-80H320v80ZM200-320h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM240-720v-200h80v61q32-29 73-45t87-16q88 0 155 56.5T716-720h-82q-14-53-56.5-86.5T480-840q-30 0-57 10.5T375-800h65v80H240Z" />
  </svg>
)

export { IconKeyboardPreviousLanguageOutlinedFilled as default }
