import React from 'react'
import { IconProps } from './types.js'

export const IconViewInArOffRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M766-80h-86q-17 0-28.5-11.5T640-120q0-17 11.5-28.5T680-160h14v8L146-700h14v20q0 17-11.5 28.5T120-640q-17 0-28.5-11.5T80-680v-86l-26-26q-12-12-12-28.5T54-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T790-57l-24-23Zm114-200v86l-80-80v-6q0-17 11.5-28.5T840-320q17 0 28.5 11.5T880-280ZM194-880h86q17 0 28.5 11.5T320-840q0 17-11.5 28.5T280-800h-6l-80-80Zm646 240q-17 0-28.5-11.5T800-680v-120H680q-17 0-28.5-11.5T640-840q0-17 11.5-28.5T680-880h120q33 0 56.5 23.5T880-800v120q0 17-11.5 28.5T840-640ZM160-80q-33 0-56.5-23.5T80-160v-120q0-17 11.5-28.5T120-320q17 0 28.5 11.5T160-280v120h120q17 0 28.5 11.5T320-120q0 17-11.5 28.5T280-80H160Zm392-442Zm-72 42Zm269 155L348-726l92-53q19-11 40-11t40 11l200 115q19 11 29.5 29.5T760-595v230q0 11-3 21t-8 19ZM440-181 240-296q-19-11-29.5-29.5T200-365v-230q0-21 10.5-39.5T240-664l36-20 204 204 204 204-164 95q-19 11-40 11t-40-11Zm83-370Zm-83 94Zm141-36Zm-61 53ZM406-668l117 117 115-68-158-91-74 42Zm34 395v-184l-160-93v185l160 92Zm240-121v-156l-99 57 99 99ZM520-273l106-61-106-106v167Z" />
  </svg>
)
