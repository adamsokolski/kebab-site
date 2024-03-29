import React from 'react'
import '../../css/Contact/Contact.css'
import Map from '../Map/Map'

export default function Contact() {
  return (
    <footer className="contact" id="lokalizacja">
      <div className="contact-number-box">
        {' '}
        <h2>Zamów teraz!</h2>
        <p className="contact-number">502 432 560</p>
        <a href="tel:502 432 560">
          <button>
            <i class="fas fa-phone-alt"></i> ZADZWOŃ
          </button>
        </a>
        <div className="opening-hours">
          <p>pn - pt</p>
          <p>10:00 - 19:00</p>
          <p>sb</p>
          <p>10:00 - 18:00</p>
          <p>nd</p>
          <p>zamknięte</p>
        </div>
        <p className="adres">
          <span className="adres-heading">Adres:</span> 15 Pułku Piechoty Wilków
          5i, 08-530 Dęblin
        </p>
        <p className="adres">
          <p>
            <span className="adres-heading">Dowóz:</span> GRATIS na terenie
            Dęblina od <b>26zł</b> (poniżej nie dowozimy)
          </p>
          <p>okolice 1zł za 1km liczone w jedną stronę</p>
        </p>
        <a
          className="fb-link marker"
          href="https://www.facebook.com/Kebab-Pod-Kauflandem-D%C4%99blin-754295348084861/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-facebook"></i> <span>Kebab Pod Kauflandem</span>
        </a>
      </div>

      <Map />
      <hr />
      <div className="footer-info">
        Kebab Pod Kauflandem Dęblin 2021, strona wykonana przez
        <a href="https://www.adamsokolski.pl/" target="_blank" rel="noreferrer">
          {' '}
          adamsokolski.pl
        </a>
      </div>
    </footer>
  )
}
