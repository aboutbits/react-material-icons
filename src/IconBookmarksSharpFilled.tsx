import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconBookmarksSharpFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-640h480v640L400-200 160-80Zm560-160v-560H280v-80h520v640h-80Z" />
  </svg>
)
