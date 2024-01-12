import Typed from 'react-typed'

export default function HeroSection(){
    return (
        <section id="HeroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">
                        Hola, Soy Federico Bernart, soy
                    </p>
                    {/* <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            Ingeniero
                        </span>{""}
                        <br />
                            Electrónico
                    </h1> */}
                    <Typed strings={[
                        "Ingeniero Electrónico",
                        "Jr. DevOps Engineer",
                        "Jr. FullStack Developer"
                    ]}
                    typeSpeed={100}
                    backSpeed={50}
                    loop
                    className='hero--section--title hero--section--title--color'
                    />
                    <p className="hero--section--description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sed recusandae architecto.
                    </p>
                </div>
                <button className="btn btn-primary">Contactame</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero Section" />
            </div>
        </section>
    )
}