import React from 'react'
import { IconProps } from './types'

export const IconSignLanguageSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M527-640 271-829l47-66 257 191-48 64Zm-153-64-56 58-87-63 46-65 97 70Zm369 75L406-879l46-64 230 169 16-123 91-14 111 374-85 114-64-48 60-81-53-183-15 106Zm-473 96-47-33 37-51 17 12 31 72h-38Zm90 253H40v-80h320v80Zm0 120H80v-80h280v80ZM160-40v-80h480v-260L488-494l52 94H120v-80h284l-62-107 66-66 312 233v380H160Zm479-514ZM500-257Z" />
  </svg>
)
