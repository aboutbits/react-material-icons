import React from 'react'
import { IconProps } from './types'

const IconEvShadowAddRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-80q-17 0-28.5-11.5T680-120v-80h-80q-17 0-28.5-11.5T560-240q0-17 11.5-28.5T600-280h80v-80q0-17 11.5-28.5T720-400q17 0 28.5 11.5T760-360v80h80q17 0 28.5 11.5T880-240q0 17-11.5 28.5T840-200h-80v80q0 17-11.5 28.5T720-80Zm-245 0q-81 0-153-31.5T196-197q-54-54-85-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 155 31t126 85q54 54 86 125.5T880-486q0 10-5.5 17T861-457q-8 5-18 5t-20-5q-23-12-48.5-17.5T721-480q-100 0-171 70.5T479-239q0 27 6.5 53t17.5 50q2 5 3 9.5t1 9.5q0 15-9 26t-23 11ZM160-480q0 111 66 198t173 113q-55-66-87-145.5T280-480q0-97 42-179.5T436-797q-118 16-197 105.5T160-480Z" />
  </svg>
)

export { IconEvShadowAddRoundedFilled as default }
