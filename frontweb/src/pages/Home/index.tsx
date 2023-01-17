import Navbar from 'components/navbar';
import { ReactComponent as CarImage } from 'assets/images/car-image.svg'
import './styles.css';
import Button from 'components/Button';

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
                    <p>Conheça os nosso carros e dê mais um passo na realização do seu sonho</p>
                </div>
            </div>
            <div className='home-content-container2'>
                <Button />
                <p>Comece agora a navegar</p>

            </div>

        </div>
        </>
    );

} 

export default Home;