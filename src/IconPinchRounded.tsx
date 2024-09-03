import React from 'react'
import { IconProps } from './types'

const IconPinchRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M593-40q-24 0-46-9t-39-26L332-252q-12-12-11-29.5t13-29.5q16-16 37.5-21.5t42.5.5l66 19v-327q0-17 11.5-28.5T520-680q17 0 28.5 11.5T560-640v380q0 20-16 32t-35 7l-46-13 102 102q5 5 12.5 8.5T593-120h167q33 0 56.5-23.5T840-200v-160q0-17 11.5-28.5T880-400q17 0 28.5 11.5T920-360v160q0 66-47 113T760-40H593Zm109-200ZM380-818 142-580h68q13 0 21.5 8.5T240-550q0 13-8.5 21.5T210-520H80q-17 0-28.5-11.5T40-560v-130q0-13 8.5-21.5T70-720q13 0 21.5 8.5T100-690v68l238-238h-68q-13 0-21.5-8.5T240-890q0-13 8.5-21.5T270-920h130q17 0 28.5 11.5T440-880v130q0 13-8.5 21.5T410-720q-13 0-21.5-8.5T380-750v-68Zm260 298q17 0 28.5 11.5T680-480v120q0 17-11.5 28.5T640-320q-17 0-28.5-11.5T600-360v-120q0-17 11.5-28.5T640-520Zm120 40q17 0 28.5 11.5T800-440v80q0 17-11.5 28.5T760-320q-17 0-28.5-11.5T720-360v-80q0-17 11.5-28.5T760-480Z" />
  </svg>
)

export { IconPinchRounded as default }
