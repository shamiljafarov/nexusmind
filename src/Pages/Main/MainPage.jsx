import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import HowWorks from '../../Components/HowItWorks/HowItWorks';
import Partners from '../../Components/Partners-Section/Partners-section';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs'

function MainPage() {
    return(
        <section>
            <Header/>
            <Hero/>
            <Partners/>
            <HowWorks />
            <WhyChooseUs/>
        </section>
    )
}

export default MainPage;