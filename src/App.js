import "./App.css";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ocean = "https://lh3.googleusercontent.com/sTPAVyodFrcieY36wdu6h5y58e06mr0K0a2h2LTN7Ehh7deAal9ikNuU2ehfaGOMuG-dwhAD3_FG1LoGg0xRZKLMBCi6qIwQoXsZFB8SW7MvnMnBzAybPhAIG0TswMa96yX1uKU_XbnEwOrn8PJOvyfZ_hEkZ5BWGvBaY27dLBsgLFJGCWjmo-zYaMaUETOUkgwVV7MoHaLQSmNs_WcRuQovMEmuSqFqlvgagHahCweIaZGRYLLwH7GCJe-zfJY2jQAnTf4nUmQDh5G1b93y8O_8WNyhalvq0hj08I3X4QThKjFK_bxJwKYSCnGKXcVSfryfqi1tjhMON0xZyE-_VELfHoSV-NRwL93J68S_0RHsppmWc3wj8sV25GkuI-44hc2rH0B8COhwK_FDGS163O9GvTr3XrufUfb86gqfdnfTQ1J7eaMtdkJIHfFTFvqJVJxOb6UuIBcPNErdr94S1Qc52WMsIF63X4ySd_fxf8NlAdo2FRnWwLsuYJGWkQ3sy3Opm6AagK3hCuuPXhGOBhbzknW12GxnOmyHKaCd8F-CfEjDRVpAQoagUdm5QxzbJw2gyCatZuPw5UY8cXppPPuYmSGLBtaMyD71Wy-VSVkXUAFZ6BlAwV5ofvC6Vfp2lEpj0F3ZAowN7mR9SzzbW9KwxpqwGat6GtZRkfPpOmv8TsHnsSoJG_AAkSKarN9_UnqJib1udg_rQS8jA40VOxrdig=w477-h318-no?authuser=0";
const hallasan = "https://lh3.googleusercontent.com/5gyx1fvABlONi4m7clhc1jOQ1wUbXVWGUn3GD482fiLS3NQv9IsBxyFF3TLMjJZifTMjRAIFrlr8z_X7ywDXZgHY_F2ht2tDJAexa_-SVtCoAwJgZEOzOMXmA5TvKK2j0Xq6dATYJJgtwli4kvEt0pvrtXDKN6mm5UMhC6orgc7o8imOIub95qN6aRvXXOuz27bV-QeYjexBTq8ucTeEKtsCglCWnn5914l4i55wqv_BVbLmZd4L5twBqv4d5bb_daC8d0-54zQyTFzomKKaC1Sbb7c5JScCc8yHziIrtO5qLtZBYOTtpvOThqfM5qf89bMYeaBkpYEjpbuzh7QLOnBDHBlVa5HWWkJEVkt91OMUC9NlI2HOO6N4ywGag8GnBG46yLydhZ86Zwjez72nv0gMETyGjmg3mv-ocWymeXUmhD5EiYRSv_2utVHeJo_Xb5-BqykqwyZ7bMRh15I7vT4FHH5vZwJVFlAnh_pP4lGNPIl3nKLb2QU73B8BLglVRm3BcRn5xM5Wod-9Mmo5HBILC92UORqeXEK16ujz5uFynTjrEYAqadmY4tSY66zqVAXkegLJdd1gpsH_mHcNXx8N55eeEQZPJ0iO-NfLID2pGJwkKeho-0DYioqugfFpuH5DydvbGoNLGLQ8wJhYGaOSpwtH4I9KBb7cmGAYyKnPfAbOdsRlLOLAV-gItyFKtOIV1FCudEsz8bPmaeHCw04f9Q=w878-h585-no?authuser=0";
const hallasantop = "https://lh3.googleusercontent.com/JEeo4GpDczLbCUpgsrrOimUSoqZRZWx6lH2PrYfqiSujzsCXUfrpJJjg1yzg9zuYQKO0wm9QOL4z9WOloG2KMl_eF5ELpQVmOKTpcgK-vR8gxPrbdQIxPM-aMznA7zvGf2Wvibe78h7aD_nFi6FndmzML-aSmWfkVoPByeexi5tmJ6S-cpmN4ivk-tavEkBHoeMaYA7dqTU2fWVPWHODYcgIj8FPEvM6eBYqbT9iLtKfIwwNlXnOZ1NGtoSSvI8M30q30n2D3eEaQ86O78DBHar8_qefsE89wNzoj0FUcvdlNb3SdjoVeOqC-M3NeYuei4olm5j9AsY1TJqX1WtmkhHDD_a6dCgUpeGdgC-GsIoB3ndobUujZQC2xvfly7sogwfkZ0RlQr-yA-oZcgY1-CKrKNxsq8XIFqRLRh3SgSyQRL1r7rkW5lzBQSAa0ssMqf-06fxWQd8pEHNav10MZZuI_jjUHMm_hfmMHCROPinjFru7ExLEfWoNIbb6lgUZVX2RHD-LmvKXLDbidHupOhSL4fyQxram8SiG3dzBmDzM6LW2POwOhBFFzFvgAiECxb0MEpS4UV1qAtRC3rkSa-OToUuxbFTIjm_NGOukYsX2m8iH8LGEl5mEHl1qQ0oHIMXWbRCu4wiKVo6bXO2_f8P4XbTuoWKwMFD9L7Kl0fzc-OQJHIMAVahGzjJITT0gEUGxE1nP7I4WhGV8PnZUTzcW-A=w878-h585-no?authuser=0";
const golfclub = "https://lh3.googleusercontent.com/33CPqExmrAJLDVe-DDzPyUeZS6uE-aNtSvBcvm3biAtqo81aXSlLMaRJfkk5iwsXipdwDmjrq3O-G9UV4gT7jnMUHD4x0zjeKSajvzYQOOmAr-LEXD_khhJFTSYjFdnRgujxlrsrx7V_z-rHLla8vF40OEbBKQkHxWplBMF44ka8A-SXLqBSsWUHJtCeeY6uD45nFr0BXZFYTobmpcl4iewokJ8VZA1z0zwCSwYqLLKFNsEsjQ7D3CgN2qpMQxFMWzpU9Hl1XOBZ7Dwk4bc5Jxyd0i3wO75xMWAs8lJmvQMLyDhxRr9FUtFaTqXNH8SgACMjrA0Lf_V-8YMmC-Tkt_WM-T3cox_sMp8Ab3cbU2_r3XnrG9tU30z3tZ43QMW6foCiXmPLR0NQSe4ybOzbSvN5tsJ78Q9q2d8lainndl8JKUvTN-5JTq-czsBdCU_su0Dod94evyYfdtNf04k-mdBzM2Hc5AyHA3B9yFkrAXT1e25WS-bDlGlXQd2GmQ9dJzOvy-wBo-9xSbsKxN7usn7jzB0nCCtvTurobLb5zb7yZ3NAi2JCydEx5KqecTh6A63dIomwdxnTAJ1yfx3KiDpnnY3UcyP7OsWO2GmDoeEVdskMvQCq0ZsuK7NUxqglcsfsikT89lmVyNalRbWchbgAH3V9oARjj2jPcBQLD0Ys1XLvTVLM8DqCTYCWutpOraH6oOJOfJ2spymxpq72HmJ9EA=w878-h585-no?authuser=0";

const images = [hallasan, hallasantop, ocean, golfclub];

function App() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      <h1>Creative Ideas for Non-Creative People</h1>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
      <div clasName="buy">
        <button>Buy</button>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
