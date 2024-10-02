import React from 'react'
import { IconProps } from './types'

export const IconSortByAlphaRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m196-376-23 70q-4 11-14 18.5t-22 7.5q-20 0-32.5-16.5T100-333l120-321q5-12 15-19t23-7h30q13 0 23 7t15 19l121 323q7 19-4.5 35T411-280q-12 0-22-7.5T375-306l-25-70H196Zm24-68h104l-48-150h-6l-50 150Zm418 92h166q15 0 25.5 10.5T840-316q0 15-10.5 25.5T804-280H572q-10 0-17-7t-7-17v-38q0-7 2-13.5t7-11.5l193-241H592q-15 0-25.5-10.5T556-644q0-15 10.5-25.5T592-680h222q10 0 17 7t7 17v38q0 7-2 13.5t-7 11.5L638-352ZM384-760q-7 0-9.5-6t2.5-11l89-89q6-6 14-6t14 6l89 89q5 5 2.5 11t-9.5 6H384Zm82 666-89-89q-5-5-2.5-11t9.5-6h192q7 0 9.5 6t-2.5 11l-89 89q-6 6-14 6t-14-6Z" />
  </svg>
)
