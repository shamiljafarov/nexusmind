import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import HowWorks from '../../Components/HowItWorks/HowItWorks';
import Partners from '../../Components/Partners-Section/Partners-section';
import Psychologists from '../../Components/Psychologist-section/Psychologist';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs'

function MainPage() {
    return(
        <section>
            <Header/>
            <Hero/>
            <Partners/>
            <HowWorks />
            <WhyChooseUs/>
            <Psychologists/>
        </section>
    )
}

export default MainPage;