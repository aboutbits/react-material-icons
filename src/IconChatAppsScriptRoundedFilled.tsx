import React from 'react'
import { IconProps } from './types'

const IconChatAppsScriptRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M578-160q-17 0-28.5-11.5T538-200q0-17 11.5-28.5T578-240h113l-92-65q-14-10-16.5-25.5T589-360q9-14 25-16.5t30 6.5l93 64-39-106q-6-15 1-30t23-21q16-6 31 1t21 23l38 106 30-109q5-16 18.5-24.5T890-470q16 5 24.5 18.5T918-422l-62 232q-4 14-14.5 22t-24.5 8H578ZM320-600h240q17 0 28.5-11.5T600-640q0-17-11.5-28.5T560-680H320q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm0 160h120q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520H320q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm-80 160-86 86q-10 10-22 5t-12-19v-552q0-33 23.5-56.5T200-840h480q33 0 56.5 23.5T760-760v174q0 12-8.5 19.5T731-560q-51-2-98 16.5T550-489q-35 36-53.5 82.5T480-309q1 12-7 20.5t-19 8.5H240Z" />
  </svg>
)

export { IconChatAppsScriptRoundedFilled as default }
