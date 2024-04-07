
interface NotificationTextoProps {

    texto: string
}
export function ButtonMenuTexto({ texto }: NotificationTextoProps) {
    return (
        <div className='text_button_menu'>
            {texto}
        </div>
    )
}
