import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconPanoramaSharpFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm160-160h480L570-520 450-360l-90-120-120 160Z" />
  </svg>
)
