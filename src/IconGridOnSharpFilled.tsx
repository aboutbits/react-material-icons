import React from 'react'
import { IconProps } from './types'

const IconGridOnSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120h187v-187H120v187Zm267 0h186v-187H387v187Zm266 0h187v-187H653v187ZM120-387h187v-186H120v186Zm267 0h186v-186H387v186Zm266 0h187v-186H653v186ZM120-653h187v-187H120v187Zm267 0h186v-187H387v187Zm266 0h187v-187H653v187Z" />
  </svg>
)

export { IconGridOnSharpFilled as default }
