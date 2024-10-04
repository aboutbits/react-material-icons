import React from 'react'
import { IconProps } from './types'

const IconChatAppsScriptOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-160v-600q0-33 23.5-56.5T200-840h480q33 0 56.5 23.5T760-760v203q-10-2-20-2.5t-20-.5q-100 0-170 70t-70 170q0 10 .5 20t2.5 20H240L120-160Zm160-440h320v-80H280v80Zm0 160h200v-80H280v80Zm298 280q-17 0-28.5-11.5T538-200q0-17 11.5-28.5T578-240h113l-92-65q-14-10-16.5-25.5T589-360q9-14 25-16.5t30 6.5l93 64-39-106q-6-15 1-30t23-21q16-6 31 1t21 23l38 106 30-109q5-16 18.5-24.5T890-470q16 5 24.5 18.5T918-422l-70 262H578Z" />
  </svg>
)

export { IconChatAppsScriptOutlinedFilled as default }
