import { Link } from "@mui/material";
import { MouseEventHandler, ReactNode } from "react";
import './ButtonMenu.css'
interface NotificationRootProps {
    children:ReactNode,

    className: string,
    href: string,
    color: string,
    
}


export function ButtonMenuRoot({children, href, color} :NotificationRootProps){
    let className='';
    if(color =='green'){
        className='botao_menu_green';
    }else if(color=='red'){
        className='botao_menu_red';

    }
    return (

        <a href={href} className={className +' botao_menu'} >
            {children}
        </a>
    );
}

