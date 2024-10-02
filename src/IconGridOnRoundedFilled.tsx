import React from 'react'
import { IconProps } from './types'

export const IconGridOnRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120h107v-187H120v107q0 33 23.5 56.5T200-120Zm187 0h186v-187H387v187Zm266 0h107q33 0 56.5-23.5T840-200v-107H653v187ZM120-387h187v-186H120v186Zm267 0h186v-186H387v186Zm266 0h187v-186H653v186ZM120-653h187v-187H200q-33 0-56.5 23.5T120-760v107Zm267 0h186v-187H387v187Zm266 0h187v-107q0-33-23.5-56.5T760-840H653v187Z" />
  </svg>
)
