import { useState } from "react";
// import { useSwipeable } from "react-swipeable";
import { useEffect } from "react";
import "./slider.css";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Dots />
      <Ellipse />
      <Numbers />
      <Access />
      <Tuition />
      <Applications />
      <HowItWorksHeader />
      <HowItWorks />
      <SliderHead />
      <Slider />
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/public/assets/pay4melogo.png" alt="logo" />
      </div>
      <nav>
        <ul>
          <li>About</li>
          <li>Blog</li>
          <li>Support</li>
        </ul>

        <button>Get Mobile App</button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Cross-Border Payments For International Students</h1>
        <div className="vector">
          <img src="/public/assets/Vector.png" alt="vector" />
        </div>
        <p>
          The easiest and fastest way to pay tuition and fees to educational
          institutions, businesses, and government agencies worldwide.
        </p>
        <div className="hero-buttons">
          <img src="/public/assets/PlaystoreIcon.png" alt="playstoreIcon" />
        </div>
      </div>
      <div className="hero-image">
        <img src="/public/assets/Mobile Screens.png" alt="hero" />
      </div>
      <div className="hero-image2">
        <img src="/public/assets/illustration_1.png" alt="illustration1" />
      </div>
    </div>
  );
}

function Dots() {
  return (
    <>
      <div className="dots">
        <img src="/public/assets/dots.png" alt="dots" />
      </div>
      <div className="dots2">
        <img src="/public/assets/dots.png" alt="dots" />
      </div>
    </>
  );
}

function Ellipse() {
  return (
    <>
      <div className="ellipse_blue">
        <img src="/public/assets/Ellipse_blue.png" alt="ellipse_blue" />
      </div>
      <div className="ellipse_red">
        <img src="/public/assets/Ellipse_red.png" alt="ellipse_red" />
      </div>
      <div className="ellipse_red2">
        <img src="/public/assets/Ellipse_red.png" alt="ellipse_red" />
      </div>
      <div className="ellipse_deep_blue">
        <img src="/public/assets/deep_big_blue.png" alt="ellipse_deep" />
      </div>
      <div className="ellipse_biggest">
        <img src="/public/assets/biggest_ellipse.png" alt="ellipse_biggest" />
      </div>
    </>
  );
}

// function Numbers() {
//   return (
//     <div className="numbers">
//       <div className="active-users">
//         <h1>115k+</h1>
//         <p>Active users</p>
//       </div>
//       <div className="passive-users">
//         <h1>88k</h1>
//         <p>Passive users</p>
//       </div>
//       <div className="increase_in_users">
//         <h1>30%</h1>
//         <p>increase in users</p>
//       </div>
//       <div className="testimonials">
//         <h1>{`>10k`}</h1>
//         <p>Good Testimonials</p>
//       </div>
//     </div>
//   );
// }

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Numbers() {
  const [hasCounted, setHasCounted] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    onChange: (inView) => {
      if (inView && !hasCounted) {
        setHasCounted(true);
      }
    },
  });

  const formatNumber = (value) => {
    if (value >= 1000) {
      return (value / 1000).toFixed(1) + "k+";
    }
    return value;
  };

  return (
    <div className="numbers" ref={ref}>
      <div className="active-users">
        <h1>
          {hasCounted && (
            <CountUp
              start={0}
              end={115000}
              duration={2}
              formattingFn={formatNumber}
            />
          )}
        </h1>
        <p>Active users</p>
      </div>
      <div className="passive-users">
        <h1>
          {hasCounted && (
            <CountUp
              start={0}
              end={88000}
              duration={2}
              formattingFn={formatNumber}
            />
          )}
        </h1>
        <p>Passive users</p>
      </div>
      <div className="increase_in_users">
        <h1>
          {hasCounted && <CountUp start={0} end={30} duration={2} suffix="%" />}
        </h1>
        <p>increase in users</p>
      </div>
      <div className="testimonials">
        <h1>
          {hasCounted && (
            <CountUp
              start={0}
              end={10000}
              duration={2}
              formattingFn={formatNumber}
            />
          )}
        </h1>
        <p>Good Testimonials</p>
      </div>
    </div>
  );
}

function Access() {
  return (
    <div className="access">
      <div className="access-item">
        <div className="access-image">
          <img
            src="/public/assets/healthicons_crisis-response-center-person.png"
            alt="illustration"
          />
        </div>
        <div className="access-content">
          <h4>Vast Institutions & Applications</h4>
          <p>
            Have access to a vast collection of universities and institutions
            where you can pay expenses to.
          </p>
        </div>
      </div>
      <div className="access-item">
        <div className="access-image">
          <img
            src="/public/assets/devicon-plain_fastapi.png"
            alt="illustration"
          />
        </div>
        <div className="access-content">
          <h4>Instantaneous transactions</h4>
          <p>
            Fast transaction processed in a working day or at most 3 working
            days.
          </p>
        </div>
      </div>
      <div className="access-item">
        <div className="access-image">
          <img src="/public/assets/mdi_secure.png" alt="illustration" />
        </div>
        <div className="access-content">
          <h4>Secure Payments</h4>
          <p>
            Make safe, secure and protected payments without fear of loss of
            funds.
          </p>
        </div>
      </div>
    </div>
  );
}

function Tuition() {
  return (
    <div className="tuition">
      <div className="tuition-image">
        <img src="/public/assets/illustration_2.png" alt="tuition" />
      </div>
      <div className="tuition-content">
        <h1>Super Fast Tuition and School Fees Payments</h1>
        <p>
          Give your customers tailored assistance based on their unique needs.
          They receive relevant and timely support, customized to their specific
          queries.
        </p>
        <button>Make A Payment</button>
        <div className="vector2">
          <img src="/public/assets/Vector-cash.png" alt="vector2" />
        </div>
        <div className="vector3">
          <img src="/public/assets/tabler_currency-naira.png" alt="vector3" />
        </div>
      </div>
    </div>
  );
}

function Applications() {
  return (
    <div className="applications">
      <div className="application-content">
        <h1>Pay for SEVIS, WES, Visa, Applications & More</h1>
        <p>
          We help you get closer to your study abroad and relocation goals
          faster by promptly completing your payment orders for credentials
          evaluation, immigration, and visa purposes.
        </p>
        <button>Get Started</button>
      </div>
      <div className="application-image">
        <img src="/public/assets/illustration_3.png" alt="application" />
      </div>
    </div>
  );
}

function HowItWorksHeader() {
  return (
    <>
      <h1 className="how-it-works-header">How It works?</h1>
      <img
        className="vector4"
        src="/public/assets/Vector(2).png"
        alt="vector4"
      />
    </>
  );
}

function HowItWorks() {
  return (
    <div className="how-it-works">
      <div className="how-it-works-item">
        <div className="download">
          <img src="/public/assets/download.png" alt="download-icon" />
        </div>

        <h3>Download Pay4Me App</h3>
        <p>
          Get the latest version of the Pay4Me app from your preferred mobile
          store.
        </p>
      </div>
      <div className="how-it-works-item">
        <div className="sign-up">
          <img src="/public/assets/mdi_account.png" alt="sign-up" />
        </div>

        <h3>Sign Up</h3>
        <p>
          Create an account with just a few easy steps, stress and cash free.
        </p>
      </div>
      <div className="how-it-works-item">
        <div className="fast-pay">
          <img src="/public/assets/fast-pay.png" alt="fast-pay" />
        </div>

        <h3>Make Fast Payments</h3>
        <p>
          Start making international payments seamslessly and with various
          institutions and applications.
        </p>
      </div>
      <img className="line-1" src="/public/assets/line1.png" alt="line-1" />
      <img className="line-2" src="/public/assets/line2.png" alt="line-2" />
      {/* <div className="vector5">
        <img src="/public/assets/tabler_currency-naira.png" alt="vector3" />
      </div> */}
    </div>
  );
}

import "./slider.css";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/public/assets/Rectangle 38.png",
      title: "Navigating International Payments for Education without Stress",
      date: "December 29, 2024",
      category: "Education",
      author: "John Ebuka",
      avatar: "/public/assets/Image.png",
    },
    {
      image: "/public/assets/Rectangle 38.png",
      title: "Step by Step on How to Pay Tuition from Nigeria to Ghana",
      date: "December 30, 2024",
      category: "Education",
      author: "John Ebuka",
      avatar: "/public/assets/Image.png",
    },
    {
      image: "/public/assets/Rectangle 38.png",
      title:
        "Why Universities prefer Pay4Me app as their Africa Payment Partner",
      date: "December 30, 2024",
      category: "Education",
      author: "John Ebuka",
      avatar: "/public/assets/Image.png",
    },
    {
      image: "/public/assets/Rectangle 38.png",
      title: "Understanding Global Education Payments",
      date: "December 31, 2024",
      category: "Education",
      author: "John Ebuka",
      avatar: "/public/assets/Image.png",
    },
    {
      image: "/public/assets/Rectangle 38.png",
      title: "The Future of International Education Payments",
      date: "January 1, 2025",
      category: "Education",
      author: "John Ebuka",
      avatar: "/public/assets/Image.png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 3 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 3 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 3 : prevSlide - 1
    );
  };

  const goToSlide = (slideIndex) => {
    if (slideIndex <= slides.length - 3) {
      setCurrentSlide(slideIndex);
    }
  };

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{
          transform: `translateX(calc(-${currentSlide * 33.333}% - ${
            currentSlide * 2
          }rem))`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="slide-content">
              <img src={slide.image} alt="blog" />
              <span className="category">{slide.category}</span>
              <h2>{slide.title}</h2>
              <div className="author-info">
                <div className="author-avatar">
                  <img src={slide.avatar} alt="author" />
                </div>
                <div className="author-details">
                  <span className="author-name">{slide.author}</span>
                  <span className="post-date">{slide.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-dots">
        {slides.slice(0, slides.length - 2).map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <button className="nav-button prev" onClick={prevSlide}>
        &#8249;
      </button>
      <button className="nav-button next" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
}

function SliderHead() {
  return (
    <div className="slider-head">
      <h1>
        Latest Blog
        <br /> and Resources
      </h1>
      <img
        className="vector6"
        src="/public/assets/Vector(3).png"
        alt="vector6"
      />
      <img
        className="vector7"
        src="/public/assets/Vector-cash.png"
        alt="vector7"
      />
    </div>
  );
}

// function Faq() {
//   return <div className="faq">
//     <h1>FAQs</h1>
//     <div className="faq-item">
//       <h3>What is the Pay4Me App?</h3> <button>v</button>
//   </div>
//     </div>
// }
