import React from 'react'
import { IconProps } from './types'

const IconRavenOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m334-80-74-30 58-141q-106-28-172-114T80-560v-160q0-66 47-113t113-47q22 0 42 7.5t40 15.5l238 97-160 60v60l440 280 40 200h-80l-40-80H560v160h-80v-160h-80L334-80Zm66-240h353l-63-40H400q-66 0-113-47t-47-113h80q0 33 23.5 56.5T400-440h165L320-596v-124q0-33-23.5-56.5T240-800q-33 0-56.5 23.5T160-720v160q0 100 70 170t170 70ZM240-680q-17 0-28.5-11.5T200-720q0-17 11.5-28.5T240-760q17 0 28.5 11.5T280-720q0 17-11.5 28.5T240-680Zm160 320Z" />
  </svg>
)

export { IconRavenOutlined as default }
