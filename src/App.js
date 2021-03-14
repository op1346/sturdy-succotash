import "./App.css";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ocean = "https://lh3.googleusercontent.com/lv7IqybzkbrqtdKWxIVc6Awk7-ENqV58IOIk0pR9ywWtd09PNCfm2T5yrFBKsPk_B_n2sTF_COxCc1msu0nMAQu2HrCwkB1UW4bHRb3Uzcs3OteVYlWbSSVbDc-T9w6z1UZ_uksm4vNL3vvI86Qlegug1z7iesXWIMXi3NTTQwAtE-gVPVTRVeDPZQGZxg1C_2od4yIcrxtZPRzyepV3wjYVXE1rWHM5NZIrSPMaUKCK8Q2f9UdopZvF8BuQOeDy2nrg26mQv92qY7PbFEiO7DzmOl_pf0jzBB-YMBAzLXT1mJgaa-7A3VyvUM6LyqA8eW5S9ehjaZLFztVCYF2giIXjGfgRRU6zjFAkft4GJtKcNE6SR5RDOXID2g7vxa6oVIUWtXfpIE2EZnIh9lWVb720w_or-rZL1hVWYyVwZHSo8QjquL1QyZ-sw8abYP85rvPRd5nZA3n0H-6yvPySGkxXWeq46ZvtgfQM2f3EIfiQ--azuDGaCOVNba2Dz7rsDlLh9jsVJX0Osw42BoVcZke8dMZU5JuQaW4HP_69dzrsYp3Eqo7Z9yAMIXJymPtzPozBX_ImjV5tuFNk_9_3BhDo0FVzQeE0ZtxYmnqDYlWc8Vl2NDqFbGRLruLEXbCtQJsIXlEfJiTT6Fu0TUk3tb-7qXwfhje2I2zdu0HmLoR_1qTxqA6keMLnVq8JQBs2sKQ8ufwM7x-IDsPx5slpv4o3dw=w878-h585-no?authuser=0";
const hallasan = "https://lh3.googleusercontent.com/lScei-k4ZttmqDphfk3mYxTB09-yPSgLlhH7q068wLSYFYPLsMGKWs8bWnQmUteCB4RBx7PFthC7pzZn2n-2KI-XHJXUElYHCEd-hWyeyfkjzcpQurXvyN5xSO3hjBDUaW0MBa9cBWqiAbu0HXlMDtJPE0mlcfqhy1ueGNX9lcLDHUx8w-fpi_GmkfRyWJiLjBKUoQM9r5tv7h8nWPPzXJfyZzXlJyWyVkXdCpKS4Sgfy5kTqcX1fig39wT0GgkZ3PajTBSKnntta-OApia8ne204mR5shwiktbwsDaPIP5XQVElKRqOgOMnUZqnSmueYCyoJGt_lpmT8u_NPMYuW7t_Ofg2nVv9rpxMLIBvUfSlzzyalgBvua9QsRZYswsUUTfJJ_RNQhjc7sCewCCsJuLm6xYUlfNMjlWrOfrmZVnuTzJWmD8hKnVTb8nAdi7wuMonLQDAYKC-VXrLBrg53uiefoJQ6sJMyF2kvxOu6YB3LSWXY_s4xaAgRHOgSa1YZzquJ1gKd0U-oLAVTSLYt8HCrxfG2-_RdP2blPr5jYQnk8-61s54UTU2GHbtrVgyh2veGn10KnTBs85mCLeSVfYlY4bpz3CCdAbgzEvCNLq1bCQdYMLHBs3vauj2G-SAkvXPZHQ8otavtI9Qv_9rvp2F3igfp2KrkxtHX1a3ilnJDyDFvOZIAh5a7DWEytdtISAFNyMAlGYrIWHvdmJo9xF7xg=w878-h585-no?authuser=0";
const hallasantop = "https://lh3.googleusercontent.com/QfIHP-hkGKk3faB-8UkeoEG5W8275p81p-yvFPOGDDy5ddH8-bZY5YvwyDx8gB5k7ilh2JOKAwfG01-xqEsLBXXy1ucRFIvEPlWnOFyvTI9Hfy44Osx6zrPfXXbuSYo50mewu8KnDeOyqxmxDc3J2HPt0dV9AaydLCbcEe9WR0WZlF2Zn4cisrOWX0TfROBLTd8R2Leops98-UUkSm-21FWb5XfW_6ngTTJcB0rNoc2QhBr9WFyW09gKyBTKLxVJpiPgguj0__hwnzM1ztSxHNcLZpkHAmp57VapnrtYNfqiKNRJmKl2x2VMoLKmt3j9WwenD2PVEnQJgIZGAgZ5NgZeJvRFz4rzAcdLoMqwJaIBvkYinf9Zo_hK-40um5Z0y1Mf9o17gDFP_cZbgjdIBKIXXolMOj5IiJfqcSI9-BKwEQaCzgoRhaYT4ryafD8BQSd68IGNARuWL-Cas7fxlQgEfK1c2gyNKonpYWzbV8T3tVrxAE9UeTLX7KH22_FIC4Bu-xJ6Q5TiwMSvaPCgwNSz8w_vlWKlUwEus3nS4S8HiDRlD6Wx0oCsjP7k_f67y4A4FN2kLHsfuDM5uR_jWXzayDyvSpgsMTnrvgKs9iBzpRmFDcD1QpcqqiTJkUfAucFrEAB9SJPoQwJfTfAQxYsQuVp_0Duf-EI5B0ElwWFCkbLQRFRag3d_dhqr0vC-m4s8FToEJGosdB44Gt6Hw9lGcQ=w878-h585-no?authuser=0";
const golfclub = "https://lh3.googleusercontent.com/B87mXgu-Z9lMXFJfBfnRvz4SyFhqoGyPtwXsoNdxJv5Va_HvTpfmR1tW7HTdhAxEBd_RcOpc1b93ArhiE3JjM5Po0PyfEHuw3GCVvaiby1PhrhbLlOdofIa8x80eEtAdjAkmoeS-WuOYP05LE7E6iCrlwModAGCuYesB_md9B068mKyZiyqS5CajC_fsjYVR9asaEqlHV0XmHkM2Xgi22HEZcDmAyFdNouvTtNaKffShwmN1FvrE_eu925GO_iguJFGvF1z-ZwEFtTd5MDgMrrbGjrGBbg7fDQG98AhwXlk1ERYppze-gynQdmk5KcnW0RgTy47kf8MXlq7itpzffr_9cqH7WmGJCMjfA4op4p08tu2ihzsDOaZcN2-DSPtYXD9-o5W9A9Jyy_9R8mSFf1Lrzmp5Oj99GeZzTz1FlCYyG5elM06m_m6dBuzXUkJeTmZBkdchggFSVCqoPIa36HlzbNEhbL9ypgkeUfXL3ti6sGar514Dopk3k6awJRxkJ37sXKQaHBzZLHOrCmjXCkt2i-qA882FhpEMQ7u6J2WuFqhPTv62Lqgaxj5dejmZdqShjJBk1T6NEWjxFtcfsFd6cmBROx6bJSdnn3T6xGJz8_BDo1yU9XGtow1OAEMVNEx7RhA7RAT-Zjz4UDcuDBm633chXZKSlwzPCC2DNILczNpN1ZpFXzoSwHjQRPWwDbYFim5kcZqdHAO_cwVV7of4uw=w878-h585-no?authuser=0";

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
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
