import React from 'react'
import { IconProps } from './types'

const IconKeyboardExternalInputOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-520v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h80v-80h-80ZM200-640v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h80v-80h-80Zm40 560-56-56 63-64H560v-80h167l-63-64 56-56 160 160L720-80ZM484-200H160q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h640q33 0 56.5 23.5T880-680v261q-26-23-56.5-37.5T760-476v-44h-80v44q-11 2-20.5 4t-19.5 6v-54h-80v80h28q-13 8-24 18.5T542-400H320v80h174q-7 19-10 39t-3 41q0 11 .5 20.5T484-200Z" />
  </svg>
)

export { IconKeyboardExternalInputOutlinedFilled as default }
