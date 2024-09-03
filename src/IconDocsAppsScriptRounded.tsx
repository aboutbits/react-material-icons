import React from 'react'
import { IconProps } from './types'

const IconDocsAppsScriptRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-120q-17 0-28.5-11.5T480-160q0-17 11.5-28.5T520-200h113l-92-65q-14-10-16.5-25.5T531-320q9-14 25-16.5t30 6.5l93 64-39-106q-6-15 1-30t23-21q16-6 31 1t21 23l38 106 30-109q5-16 18.5-24.5T832-430q16 5 25 18.5t4 29.5l-62 232q-4 14-14.5 22t-24.5 8H520ZM160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h243q-3 21-2.5 40t3.5 40H160Zm0-160q-17 0-28.5-11.5T120-440q0-17 11.5-28.5T160-480h346q-23 16-41.5 36T432-400H160Zm0-160q-17 0-28.5-11.5T120-600q0-17 11.5-28.5T160-640h520q17 0 28.5 11.5T720-600q0 17-11.5 28.5T680-560H160Zm0-160q-17 0-28.5-11.5T120-760q0-17 11.5-28.5T160-800h520q17 0 28.5 11.5T720-760q0 17-11.5 28.5T680-720H160Z" />
  </svg>
)

export { IconDocsAppsScriptRounded as default }