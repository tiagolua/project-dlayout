import Navbar from 'components/navbar';
import { ReactComponent as CarImage } from 'assets/images/car-image.svg'
import './styles.css';

const Home = () => {
    return (
        <>
        <Navbar />
        <div className='home-container'>
            <div className='home-content-container1'>
                <div className='home-content-image'>
                    <CarImage />
                </div>
                <div className='home-content-text1'>
                    <h1>O carro perfeito para você</h1>
                    <h2>Conheça os nosso carros e dê mais um passo na realização do seu sonho</h2>
                </div>
            </div>
            <div className='home-content-container2'>
                <button>VER CATÁLOGO</button>
                <h6>Comece agora a navegar</h6>

            </div>

        </div>
        </>
    );

} 

export default Home;