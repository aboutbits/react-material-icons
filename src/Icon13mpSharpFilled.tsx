import React from 'react'
import { IconProps } from './types'

const Icon13mpSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M340-500h60v-240H280v60h60v180Zm140 0h180v-240H480v60h120v40h-80v40h80v40H480v60ZM240-220h60v-180h40v120h60v-120h40v180h60v-240H240v240Zm300 0h60v-60h120v-180H540v240Zm60-120v-60h60v60h-60ZM120-120v-720h720v720H120Z" />
  </svg>
)

export { Icon13mpSharpFilled as default }
