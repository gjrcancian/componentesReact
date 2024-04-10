
import "./Menu.css";
import { ButtonMenu } from "../componentesReact/ButtonMenu";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import ThumbUp from '@mui/icons-material/ThumbUp';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
export default function Menu() {
    const setaIcon = <ArrowBackIosRoundedIcon className='icon_button_menu' />;
    const socioIcon = <PersonSearchRoundedIcon className='icon_button_menu' />;
    const likeIcon = <ThumbUp className='icon_button_menu' />;
    const photoCamera = <PhotoCamera className='icon_button_menu' />;

    return (
        <div className='container_app'>
            <div className='menu'>

                <ButtonMenu.Root classColor='yellow_white' className="botao_menu" href='/contato' >

                    <ButtonMenu.Icon Icon={socioIcon} />
                    <ButtonMenu.Texto texto='Associados' />


                </ButtonMenu.Root >


                <ButtonMenu.Root classColor='white_green' className="botao_menu" href='/contato' >

                    <ButtonMenu.Icon Icon={socioIcon} />
                    <ButtonMenu.Texto texto='Associados' />


                </ButtonMenu.Root >
                <ButtonMenu.Root classColor='personalize_color1' myWidth='40px' href='/contato'>

                    <ButtonMenu.Icon Icon={likeIcon} />

                    <ButtonMenu.Texto texto='Facebook' />

                    <ButtonMenu.Icon Icon={likeIcon} />

                </ButtonMenu.Root >

                <ButtonMenu.Root classColor='personalize_color1' myWidth='40px' href='/contato'>


                    <ButtonMenu.Texto texto='Facebook' />

                    <ButtonMenu.Icon Icon={likeIcon} />

                </ButtonMenu.Root >
                <ButtonMenu.Root classColor='green_white' border='border' className="button_menu" myWidth='40px' href='/contato'>
                    <ButtonMenu.Icon Icon={likeIcon} />


                    <ButtonMenu.Texto texto='Facebook' />


                </ButtonMenu.Root >

                <ButtonMenu.Root classColor='green_white' border='border' className="big_button" href='/contato'>
                    <ButtonMenu.Icon Icon={likeIcon} />


                    <ButtonMenu.Texto texto='Facebook' />


                </ButtonMenu.Root >
                <ButtonMenu.Root classColor='green_white' className="big_button" myWidth="70px" href='/contato'>
                    <ButtonMenu.Icon Icon={likeIcon} />




                </ButtonMenu.Root >
                <ButtonMenu.Root classColor='personalize_color2' myWidth='40px' href='/contato'>

                    <ButtonMenu.Icon Icon={photoCamera} />
                    <ButtonMenu.Texto texto='Instagram' />


                </ButtonMenu.Root >
                <div className="container_varios_icones">

                    <ButtonMenu.Root classColor='red_white' className="icon_button" myWidth='40px' href='/contato'>

                        <ButtonMenu.Icon Icon={socioIcon} />

                    </ButtonMenu.Root >



                    <ButtonMenu.Root classColor='yellow_white' className="icon_button" myWidth='40px' href='/contato'>

                        <ButtonMenu.Icon Icon={socioIcon} />

                    </ButtonMenu.Root >


                    <ButtonMenu.Root classColor='yellow_red' className="icon_button" myWidth='40px' href='/contato'>

                        <ButtonMenu.Icon Icon={socioIcon} />

                    </ButtonMenu.Root >


                    <ButtonMenu.Root classColor='green_white' className="icon_button" myWidth='40px' href='/contato'>

                        <ButtonMenu.Icon Icon={likeIcon} />

                    </ButtonMenu.Root >

                </div>


                <ButtonMenu.Root classColor='green_white' href='/contato'>

                    <ButtonMenu.Icon Icon={setaIcon} />
                    <ButtonMenu.Texto texto='Mundo' />
                    <ButtonMenu.Letra letra='a' />

                </ButtonMenu.Root >



                <ButtonMenu.Root classColor='red_white' href='/contato'>

                    <ButtonMenu.Icon Icon={setaIcon} />
                    <ButtonMenu.Texto texto='Mundo' />
                </ButtonMenu.Root >


                <ButtonMenu.Root classColor='yellow_red' className="icon_button" href='/contato'>
                    <ButtonMenu.Icon Icon={setaIcon} />
                </ButtonMenu.Root >
                <ButtonMenu.Root classColor='red_white' href='/contato'>
                    <ButtonMenu.Texto texto="Sócios" />
                </ButtonMenu.Root >


            </div>


            <div className='menu' style={{ width: "150px", padding: '20px' }}>


                <ButtonMenu.Root classColor='yellow_white' border='border_bottom' className="no_color" href='/contato' >

                    <ButtonMenu.Icon Icon={setaIcon} />
                    <ButtonMenu.Texto texto='Associados' />


                </ButtonMenu.Root >


                <ButtonMenu.Root classColor='yellow_white' border='border_bottom' className="no_color" href='/contato' >

                    <ButtonMenu.Icon Icon={setaIcon} />
                    <ButtonMenu.Texto texto='Associados' />


                </ButtonMenu.Root >

                <ButtonMenu.Root classColor='yellow_white' border='border_bottom' className="no_color" href='/contato' >

                    <ButtonMenu.Icon Icon={setaIcon} />
                    <ButtonMenu.Texto texto='Associados' />


                </ButtonMenu.Root >

                <ButtonMenu.Root classColor='yellow_white' border='border_bottom' className="no_color" href='/contato' >

                    <ButtonMenu.Icon Icon={setaIcon} />
                    <ButtonMenu.Texto texto='Associados' />


                </ButtonMenu.Root >

                <ButtonMenu.Root classColor='yellow_white' border='border_bottom' className="no_color" href='/contato' >

                    <ButtonMenu.Icon Icon={setaIcon} />
                    <ButtonMenu.Texto texto='Associados' />


                </ButtonMenu.Root >

                <ButtonMenu.Root classColor='yellow_white' border='border_bottom' className="no_color" href='/contato' >

                    <ButtonMenu.Icon Icon={setaIcon} />
                    <ButtonMenu.Texto texto='Associados' />


                </ButtonMenu.Root >

                <ButtonMenu.Root classColor='yellow_white' border='border_bottom' className="no_color" href='/contato' >

                    <ButtonMenu.Icon Icon={setaIcon} />
                    <ButtonMenu.Texto texto='Associados' />


                </ButtonMenu.Root >

                <ButtonMenu.Root classColor='yellow_white' border='border_bottom3' className="no_color" href='/contato' >

                    <ButtonMenu.Icon Icon={setaIcon} />
                    <ButtonMenu.Texto texto='Associados' />


                </ButtonMenu.Root >

                <ButtonMenu.Root classColor='yellow_white' border='border_bottom4' className="no_color" href='/contato' >

                    <ButtonMenu.Icon Icon={setaIcon} />
                    <ButtonMenu.Texto texto='Associados' />


                </ButtonMenu.Root >

            </div>
            <div className='menu' style={{ width: "200px", padding: '20px' }}>


                <ButtonMenu.Root classColor='gradiente' border='border_bottom3' href='/contato' >

                    <ButtonMenu.Icon Icon={setaIcon} />
                    <ButtonMenu.Texto texto='Associados' />


                </ButtonMenu.Root >


                <ButtonMenu.Root classColor='gradiente_personalize' border='border_bottom4' href='/contato' >

                    <ButtonMenu.Icon Icon={setaIcon} />


                </ButtonMenu.Root >


                <ButtonMenu.Root classColor='gradiente1' border='border_bottom' href='/contato' >

                  
                    <ButtonMenu.Texto texto='Associados' />


                </ButtonMenu.Root >


                <ButtonMenu.Root classColor='gradiente_green' border='border_bottom' href='/contato' >

                    <ButtonMenu.Icon Icon={socioIcon} />
                    <ButtonMenu.Texto texto='PESQUISAR' />


                </ButtonMenu.Root >


                <ButtonMenu.Root classColor='gradiente_red' border='border_bottom' href='/contato' >

                    <ButtonMenu.Icon Icon={setaIcon} />
                    <ButtonMenu.Texto texto='Associados' />


                </ButtonMenu.Root >


                <ButtonMenu.Root classColor='yellow_white' border='border_bottom' href='/contato' >

                    <ButtonMenu.Icon Icon={setaIcon} />
                    <ButtonMenu.Texto texto='Associados' />


                </ButtonMenu.Root >


                <ButtonMenu.Root classColor='yellow_white' border='border_bottom' href='/contato' >

                    <ButtonMenu.Icon Icon={setaIcon} />
                    <ButtonMenu.Texto texto='Associados' />


                </ButtonMenu.Root >


                <ButtonMenu.Root classColor='yellow_white' border='border_bottom' href='/contato' >

                    <ButtonMenu.Icon Icon={setaIcon} />
                    <ButtonMenu.Texto texto='Associados' />


                </ButtonMenu.Root >


                <ButtonMenu.Root classColor='yellow_white' border='border_bottom' href='/contato' >

                    <ButtonMenu.Icon Icon={setaIcon} />
                    <ButtonMenu.Texto texto='Associados' />


                </ButtonMenu.Root >


                <ButtonMenu.Root classColor='yellow_white' border='border_bottom' href='/contato' >

                    <ButtonMenu.Icon Icon={setaIcon} />
                    <ButtonMenu.Texto texto='Associados' />


                </ButtonMenu.Root >


                <ButtonMenu.Root classColor='yellow_red' border='border_bottom' className='botao_menu' href='/contato' >

                    <ButtonMenu.Icon Icon={setaIcon} />
                    <ButtonMenu.Texto texto='Associados' />


                </ButtonMenu.Root >



            </div>

        </div>
    );
}
