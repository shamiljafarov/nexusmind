import { useEffect } from "react";
import Container from '../Container/Container';
import './_WhyChooseUs.scss';

function WhyChooseUs() {

    useEffect(() => {
        const cards = document.querySelectorAll(".choose-card");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        }, { threshold: 0.2 });

        cards.forEach((card) => observer.observe(card));
    }, []);

    return (
        <section className="why-choose-us">
            <Container>
                <div className="header">
                        <p className="first">Niyə bizi</p>
                        <p>seçməlisiniz?</p>
                    </div>
                <div className="why-choose-us-wrapper">
                    

                    <div className="choose-card">
                        <span className="icon">🧠</span>
                        <h3>Niyə bizi seçməlisiniz</h3>
                        <p>AI Dəstəkli Psixoloji Yardım — Botumuzla günün istənilən anında söhbət et, emosiyalarını bölüş və dərhal dəstək al.</p>
                    </div>

                    <div className="choose-card">
                        <span className="icon">👩‍⚕️</span>
                        <h3>Peşəkar Psixoloqlarla Əlaqə</h3>
                        <p>Təcrübəli mütəxəssislərlə yazışaraq və ya görüntülü seanslarla fərdi yanaşmadan faydalan.</p>
                    </div>

                    <div className="choose-card">
                        <span className="icon">🌐</span>
                        <h3>VR Terapiya Təcrübəsi</h3>
                        <p>Virtual dünyada rahat və təhlükəsiz psixoloji mühitə daxil ol — terapiya həm maraqlı, həm də təsirli olacaq.</p>
                    </div>

                    <div className="choose-card">
                        <span className="icon">🕹️</span>
                        <h3>Oyun Ab-havalı Sağalma Sistemi</h3>
                        <p>Xal qazan, səviyyə yüksəlt və terapiyada endirimlər əldə et — sağalma artıq daha motivasiyalıdır!</p>
                    </div>

                    <div className="choose-card">
                        <span className="icon">🤝</span>
                        <h3>Fərdi Yanaşma və Məxfilik</h3>
                        <p>Hər istifadəçi üçün fərdi yanaşma və yüksək məxfilik — rahatlığın və güvənin bizim üçün önəmlidir.</p>
                    </div>

                    <div className="choose-card">
                        <span className="icon">📱</span>
                        <h3>24/7 Dəstək Xətti</h3>
                        <p>İstənilən vaxt bizə müraciət et — emosional dəstək və sualların üçün komandamız günün 24 saatı yanındadır.</p>
                    </div>

                    <div className="choose-card">
                        <span className="icon">📊</span>
                        <h3>Proqres İzləmə Sistemi</h3>
                        <p>Terapiyada əldə etdiyin nailiyyətləri real vaxtda izləyərək motivasiyanı artır və hədəflərinə daha sürətli çat.</p>
                    </div>

                    <div className="choose-card">
                        <span className="icon">🎧</span>
                        <h3>Səsli Meditasiya və Təlimlər</h3>
                        <p>Stressi azaltmaq və zehni rahatlamaq üçün geniş meditasiya və nəfəs təlimləri kolleksiyasına giriş əldə et.</p>
                    </div>

                </div>
            </Container>
        </section>
    );
}

export default WhyChooseUs;
