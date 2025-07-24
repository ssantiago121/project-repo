import '../styles/Home.css'
import { FaGithub, FaPlus } from 'react-icons/fa'

export default function Home(){
    return(
        <div className='container'>
            <h1 className='titulo-home'>
                <FaGithub className='svg-github' size={25} />
                Meus Repositorios
            </h1>

            <form className='form-home' onSubmit={ ()=> {}}>
                <input className='input-home' type="text" placeholder='Adicionar Repositórios' />
                <button className='button-home' type='submit'>
                    <FaPlus color='#FFF' size={14} />
                </button>
            </form>
        </div>
    )
};