import { ReactNode } from "react"

interface NotificationIconProps {
    Icon:ReactNode
}
 export function ButtonMenuIcon({Icon} :NotificationIconProps) {
    return (
        <>
            {Icon}
        </>
    )
}
