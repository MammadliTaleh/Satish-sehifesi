import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        {/* Trendyol Section */}
        <div className="footer-column">
          <h4>E-Ticarət</h4>
          <ul>
            <li><a href="#">Haqqımızda</a></li>
            <li><a href="#">Kariyera</a></li>
            <li><a href="#">Əlaqə</a></li>
          </ul>
        </div>

        {/* Kampanyalar Section */}
        <div className="footer-column">
          <h4>Kampanyalar</h4>
          <ul>
            <li><a href="#">Kampanyalar</a></li>
            <li><a href="#">Alışveriş Krediti</a></li>
            <li><a href="#">E-ticaret + al</a></li>
            <li><a href="#">Hədiyə Fikirləri</a></li>
          </ul>
        </div>

        {/* Satıcı Section */}
        <div className="footer-column">
          <h4>Satıcı</h4>
          <ul>
            <li><a href="#">E-Ticarət`də Satış Et</a></li>
            <li><a href="#">Təməllər</a></li>
            <li><a href="#">Akademiyamız</a></li>
          </ul>
        </div>

        {/* Yardım Section */}
        <div className="footer-column">
          <h4>Yardım</h4>
          <ul>
            <li><a href="#">Tez-tez Verilən Suallar</a></li>
            <li><a href="#">Canlı Yardım / Asistan</a></li>
            <li><a href="#">Necə İadə Edə Bilərəm</a></li>
            <li><a href="#"> Online Rəhbər</a></li>
          </ul>
        </div>

        {/* Ülke Değiştir Section */}
        <div className="footer-column">
          <h4>Ölkəni Dəyişdir</h4>
          <select className="footer-select">
            <option value="olke">Ölkə Seç</option>
            <option value="olke1">Azərbaycan</option>
            <option value="olke2">Türkiyə</option>
            <option value="olke3">Rusiya</option>
          </select>
          <h4>Sosyal Medya</h4>
          <div className="social-icons">
            <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png" alt="Facebook" /></a>
            <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" alt="Instagram" /></a>
            <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="YouTube" /></a>
            <a href="#"><img src="https://freelogopng.com/images/all_img/1657045610twitter-icon-transparent.png" alt="Twitter" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="certificates">
          <h4>Güvənlik Sertfikasiyası</h4>
          <div className="cert-images">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE9O6HESWne8h4MQWt8aziaq-iD9pZPBUCg&s" alt="Cert 1" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv2RdgCAkh2yibWXyghXScohSZ4-iYYFTPUA&s" alt="Cert 2" />
            <img src="https://png.pngtree.com/element_pic/16/10/27/2154dea70e8dc80213719e3096b9edf1.jpg" alt="Cert 3" />
          </div>
        </div>

        <div className="payment-methods">
          <h4>Güvənli Alışveriş</h4>
          <div className="payment-images">
            <img src="https://w7.pngwing.com/pngs/223/258/png-transparent-visa-electron-credit-card-computer-icons-visa-text-logo-payment-thumbnail.png" alt="Visa" />
            <img src="https://w7.pngwing.com/pngs/397/885/png-transparent-logo-mastercard-product-font-mastercard-text-orange-logo.png" alt="MasterCard" />
            <img src="https://seeklogo.com/images/A/american-express-logo-849A4E1124-seeklogo.com.png" alt="Amex" />
          </div>
        </div>

        <div className="mobile-apps">
          <h4>Mobil Proqramlar</h4>
          <div className="app-buttons">
            <img src="https://w7.pngwing.com/pngs/270/658/png-transparent-app-store-apple-google-play-apple-text-logo-mobile-phones.png" alt="App Store" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADMTEo4YEurEn-gXFBOfumKYAJMviq-T9ww&s" alt="Google Play" />
            <img src="https://i.pinimg.com/originals/97/27/29/9727292d88aa7a3581925cc21d08424a.png" alt="App Gallery" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
