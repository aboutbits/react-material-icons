import React from 'react'
import { IconProps } from './types'

export const IconChatAppsScriptSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M578-160q-17 0-28.5-11.5T538-200q0-17 11.5-28.5T578-240h113l-92-65q-14-10-16.5-25.5T589-360q9-14 25-16.5t30 6.5l93 64-39-106q-6-15 1-30t23-21q16-6 31 1t21 23l38 106 30-109q5-16 18.5-24.5T890-470q16 5 24.5 18.5T918-422l-70 262H578Zm-458 0v-680h640v283q-10-2-20-2.5t-20-.5q-10 0-20 .5t-20 2.5v-203H200v400h283q-2 10-2.5 20t-.5 20q0 10 .5 20t2.5 20H240L120-160Zm160-440h320v-80H280v80Zm0 160h200v-80H280v80Zm-80 80v-400 400Z" />
  </svg>
)
