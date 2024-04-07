
import "./Menu.css";
import { ButtonMenu } from "./ButtonMenu";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
export default function Menu() {
const setaIcon = <ArrowBackIosRoundedIcon  className='icon_button_menu'/>;
const socioIcon = <PersonSearchRoundedIcon  className='icon_button_menu'/>;

    return (
        <div className='menu'>


            <ButtonMenu.Root color='red' href ='/contato' >
                <ButtonMenu.Icon Icon={socioIcon}/>
                <ButtonMenu.Texto texto='Associados'/>
            </ButtonMenu.Root >


            
            <ButtonMenu.Root color='green' href='/contato'>
            <ButtonMenu.Icon Icon={setaIcon}/>
                <ButtonMenu.Texto texto='Mundo'/>
            </ButtonMenu.Root >



                    

        </div>
    );
}
