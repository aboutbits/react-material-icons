import React from 'react'
import { IconProps } from './types'

const IconCoolToDryOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M784-321q-23 0-45.5-5.5T695-340q-18-8-36.5-14t-38.5-6q-23 0-45 8t-43 19l-24-55q26-14 54.5-23t57.5-9q23 0 45.5 5.5T709-401q18 8 36.5 14t38.5 6q23 0 45-8t43-19l24 55q-26 14-54.5 23t-57.5 9Zm0 120q-23 0-45.5-5.5T695-220q-18-8-36.5-14t-38.5-6q-23 0-45 8t-43 19l-24-55q26-14 54.5-23t57.5-9q23 0 45.5 5.5T709-281q18 8 36.5 14t38.5 6q23 0 45-8t43-19l24 55q-26 14-54.5 23t-57.5 9Zm0 120q-23 0-45.5-5.5T695-100q-18-8-36.5-14t-38.5-6q-23 0-45 8t-43 19l-24-55q26-14 54.5-23t57.5-9q23 0 45.5 5.5T709-161q18 8 36.5 14t38.5 6q23 0 45-8t43-19l24 55q-26 14-54.5 23T784-81Zm-344-61q-118-15-199-104t-81-210q0-66 24.5-122.5T254-678l226-222 226 222q36 35 59.5 80t31.5 97H520q-33 0-56.5 23.5T440-421v279Z" />
  </svg>
)

export { IconCoolToDryOutlinedFilled as default }
