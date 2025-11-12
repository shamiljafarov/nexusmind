import './Partners-section.scss'
import sehiyyelogo from '../../assets/images/Logo_of_the_Ministry_of_Healthcare_of_Azerbaijan.png'
import tebiblogo from '../../assets/images/TƏBİB_logo_PNG.png'
import Container from '../Container/Container'

function Partners() {
    return(
        <section>
            <Container>
                <div className="header">
                <p className='first'>Partnyorlarımızı</p>
                <p>tanıyın</p>
            </div>
            <div className='partners-logo'>
                <div className='slider'>
                    <img src={sehiyyelogo} alt='sehiyye-nazirliyi-logo' className='sehiyye-logo'/>
                    <img src={tebiblogo} alt='tebib-logo' className='tebib-logo'/>
                    <img src={sehiyyelogo} alt='sehiyye-nazirliyi-logo' className='sehiyye-logo'/>
                    <img src={tebiblogo} alt='tebib-logo' className='tebib-logo'/>
                    <img src={sehiyyelogo} alt='sehiyye-nazirliyi-logo' className='sehiyye-logo'/>
                    <img src={tebiblogo} alt='tebib-logo' className='tebib-logo'/>
                    <img src={sehiyyelogo} alt='sehiyye-nazirliyi-logo' className='sehiyye-logo'/>
                    <img src={tebiblogo} alt='tebib-logo' className='tebib-logo'/>

                    <img src={sehiyyelogo} alt='sehiyye-nazirliyi-logo' className='sehiyye-logo'/>
                    <img src={tebiblogo} alt='tebib-logo' className='tebib-logo'/>
                    <img src={sehiyyelogo} alt='sehiyye-nazirliyi-logo' className='sehiyye-logo'/>
                    <img src={tebiblogo} alt='tebib-logo' className='tebib-logo'/>
                    <img src={sehiyyelogo} alt='sehiyye-nazirliyi-logo' className='sehiyye-logo'/>
                    <img src={tebiblogo} alt='tebib-logo' className='tebib-logo'/>
                    <img src={sehiyyelogo} alt='sehiyye-nazirliyi-logo' className='sehiyye-logo'/>
                    <img src={tebiblogo} alt='tebib-logo' className='tebib-logo'/>

                </div>
            </div>
            </Container>
        </section>
    )
}

export default Partners;