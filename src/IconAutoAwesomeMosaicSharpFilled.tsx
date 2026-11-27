import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconAutoAwesomeMosaicSharpFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-120H120v-720h320v720Zm80-400v-320h320v320H520Zm0 400v-320h320v320H520Z" />
  </svg>
)
