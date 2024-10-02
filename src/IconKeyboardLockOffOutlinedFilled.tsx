import React from 'react'
import { IconProps } from './types'

export const IconKeyboardLockOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-200q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h40l360 360H320v80h244q-2 10-3 19.5t-1 20.5v80H160ZM819-28 28-820l56-56L876-84l-57 56ZM200-520v80h80v-80h-80Zm120 0v80h80v-80h-80ZM200-640v80h80v-80h-80Zm360 80h80v-80h-80v80Zm120 0h80v-80h-80v80ZM314-760h486q33 0 56.5 23.5T880-680v240q-26-20-57-30t-63-10v-40h-80v57q-11 5-21 10.5T640-440v-80h-80v6l-46-46h6v-80h-80v6L314-760Zm566 566-80-80v-46q0-17-11.5-28.5T760-360q-9 0-17.5 4T729-345l-28-29q11-12 26.5-19t32.5-7q33 0 56.5 23.5T840-320v40h6q14 0 24 10t10 24v52ZM674-80q-14 0-24-10t-10-24v-132q0-14 10-24t24-10h6l160 160v40H674Z" />
  </svg>
)
