import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const about = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consectetur eius in. Ea consequatur ipsum error, neque nulla dicta laborum.
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae provident eaque debitis placeat obcaecati rem sequi? Eveniet, suscipit debitis accusamus adipisci quibusdam eos mollitia vel nemo. Enim voluptatem rem maiores!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, accusamus! Impedit eligendi similique, magni dolorem ex ad veritatis aperiam quos recusandae, eveniet dolore ab officia.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, esse! Nobis, officia! Quos, vitae magnam.</p>
        </div>
      </div>
    </section>

    <section className="about__vision">
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae provident eaque debitis placeat obcaecati rem sequi? Eveniet, suscipit debitis accusamus adipisci quibusdam eos mollitia vel nemo. Enim voluptatem rem maiores!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, accusamus! Impedit eligendi similique, magni dolorem ex ad veritatis aperiam quos recusandae, eveniet dolore ab officia.</p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="" />
        </div>
      </div>
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae provident eaque debitis placeat obcaecati rem sequi? Eveniet, suscipit debitis accusamus adipisci quibusdam eos mollitia vel nemo. Enim voluptatem rem maiores!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, accusamus! Impedit eligendi similique, magni dolorem ex ad veritatis aperiam quos recusandae, eveniet dolore ab officia.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, esse! Nobis, officia! Quos, vitae magnam.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default about