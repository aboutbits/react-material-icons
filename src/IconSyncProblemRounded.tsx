import React from 'react'
import { IconProps } from './types'

const IconSyncProblemRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 12c0 2.21.91 4.2 2.36 5.64l-1.51 1.51c-.31.31-.09.85.36.85H8.5c.28 0 .5-.22.5-.5v-4.29c0-.45-.54-.67-.85-.35l-1.39 1.39C5.68 15.15 5 13.66 5 12c0-2.39 1.4-4.46 3.43-5.42.34-.16.57-.47.57-.84v-.19c0-.68-.71-1.11-1.32-.82C4.92 5.99 3 8.77 3 12zm8 5h2v-2h-2v2zm8.79-13H15.5c-.28 0-.5.22-.5.5v4.29c0 .45.54.67.85.35l1.39-1.39C18.32 8.85 19 10.34 19 12c0 2.39-1.4 4.46-3.43 5.42-.34.16-.57.47-.57.84v.18c0 .68.71 1.11 1.32.82C19.08 18.01 21 15.23 21 12c0-2.21-.91-4.2-2.36-5.64l1.51-1.51c.31-.31.09-.85-.36-.85zM12 13c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1z" />
  </svg>
)

export { IconSyncProblemRounded as default }
