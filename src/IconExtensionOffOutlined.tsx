import React from 'react'
import { IconProps } from './types.js'

export const IconExtensionOffOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-152q48 0 84-30.5t36-77.5q0-47-36-77.5T120-568v-152q0-17 6-31.5t17-25.5l57 57v88q54 20 87 67t33 105q0 57-33 104t-87 68v88h88q21-54 68-87t104-33q57 0 104 33t68 87h88l57 57q-11 11-25.5 17t-31.5 6H568q0-48-30.5-84T460-240q-47 0-77.5 36T352-120H200Zm600-154-80-80v-86h80q8 0 14-6t6-14q0-8-6-14t-14-6h-80v-240H480v-80q0-8-6-14t-14-6q-8 0-14 6t-6 14v80h-86l-80-80h86q0-42 29-71t71-29q42 0 71 29t29 71h160q33 0 56.5 23.5T800-720v160q42 0 71 29t29 71q0 42-29 71t-71 29v86Zm-9 219L55-791l57-57 736 736-57 57ZM537-537Zm-77 77Z" />
  </svg>
)
