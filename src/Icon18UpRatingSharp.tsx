import React from 'react'
import { IconProps } from './types'

const Icon18UpRatingSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M340-360h60v-240H280v60h60v180Zm120 0h180v-240H460v240Zm60-40v-60h60v60h-60Zm0-100v-60h60v60h-60ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z" />
  </svg>
)

export { Icon18UpRatingSharp as default }
