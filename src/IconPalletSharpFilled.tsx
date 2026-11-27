import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconPalletSharpFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-160h800v160H760v-80H540v80H420v-80H200v80H80Zm120-240v-560h560v560H200Zm160-320h240v-80H360v80Z" />
  </svg>
)
