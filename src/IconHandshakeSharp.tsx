import React from 'react'
import { IconProps } from './types'

const IconHandshakeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M474-40 79-435l302-302 146 146 28-28-214-214L68-560l39 39-57 57-94-94 387-387 124 124 124-124 394 394L474-40Zm1-112 397-399-282-282-67 67 146 146-142 142-146-146-189 189 29 29 149-149 56 56-149 149 28 28 149-149 57 57-149 149 28 28 149-149 56 56-149 149 29 29ZM359-665Z" />
  </svg>
)

export { IconHandshakeSharp as default }
