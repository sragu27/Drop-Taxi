var footer = `<footer class="taxi-footer">
        <div class="custom__container">
          <div class="taxi__footer__row pt-4">
            <div class="taxi__footer__logo">
              <h1>Taxi</h1>
            </div>
            <div class="ft__row">
              <div class="ft__item ft__left">
                <ul class="ft__menu">
                  <li><a href="about.html">About</a></li>
                  <li><a href="#">Services</a></li>
                   <li><a href="#">Pricing</a></li>
                   <li><a href="terms-condition.html"> Terms &amp; Condition</a></li>
                  <li><a href="privacy-policy.html"> Privacy Policy</a></li>
                </ul>
              </div>

              <div class="ft__item ft__right">
                <div class="ft__fresh__news">
                  <div class="primary__input">
                    <p>Get the freshest news from us</p>
                    <div class="email__box">
                      <label for="" class="contact__input">
                        <input type="text" placeholder="Your Email Address" />
                        <button type="button" class="tx-btn submit__btn">
                          <span>Submit</span>
                        </button>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ft__border">
              <hr />
            </div>

            <div class="footer__copy__right">
              <div class="ft__c_right">
                <div class="ft__cpy__item">
                  <ul class="ft__cpy__menu">
                    <li><a href="tel:+919940708777"><i class="fa-solid fa-phone"></i></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=61566047466791"><i class="fa-brands fa-facebook ic_social"></i></a></li>
                    <li><a href="https://www.instagram.com/book_my_savaari_bms?utm_source=qr&igsh=MXQ5MnpubWZ6YmIzZw=="> <i class="fa-brands fa-instagram ic_social"></i></a></li>
                    <li><a href="https://x.com/i/verified-get-verified"><i class="fa-brands fa-square-twitter ic_social"></i></a></li>
                  </ul>
                </div>
                <div class="ft__cpy__item">
                  <p>
                    Copyright &copy; 2024, All Right Reserved
                    <a href="bookmysavaari.com">bookmysavaari.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>`;
$("#taxiFooter").html(footer);

// sub header

var smallHeader = `<div class="sub__navbar">
          <div class="sub__navbar__container custom__container">
            <div class="sub__nav__list">
              <h5>Welcome To Taxi Services</h5>
            </div>
            <div class="sub__nav__list">
              <ul class="contacts">
                <li class="contact__list">
                  <div class="contact__item">
                    <i class="fa-solid fa-phone ic_social"></i>
                    <h5>+91 &nbsp; 9940709444</h5>
                  </div>
                </li>
                <li class="contact__list">
                  <div class="contact__item">
                    <span class="leftBord"></span>
                  </div>
                </li>
                <li class="contact__list">
                  <div class="contact__item">
                    <i class="fa-regular fa-envelope ic_social"></i>
                    <h5>Bookmysavaaribms@gmail.com</h5>
                  </div>
                </li>
              </ul>
            </div>
            <div class="sub__nav__list">
              <ul class="social__media">
                <li class="social__media__item">
                 <a href="https://www.facebook.com/profile.php?id=61566047466791"> <i class="fa-brands fa-facebook ic_social"></i></a>
                </li>
                <li class="social__media__item">
                 <a href="https://x.com/i/verified-get-verified"> <i class="fa-brands fa-square-twitter ic_social"></i></a>
                </li>
                <li class="social__media__item">
                 <a href="https://www.instagram.com/book_my_savaari_bms?utm_source=qr&igsh=MXQ5MnpubWZ6YmIzZw=="> <i class="fa-brands fa-instagram ic_social"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>`;
$("#subHeader").html(smallHeader);

// main header

var header = `<nav class="main__navbar">
        <div class="navbar__container custom__container">
          <input type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <ul class="menu-items">
            <li><a class="nav__active" href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
           <a href="index.html"><h1 class="logo">BookMySavaari</h1></a>
        </div>
      </nav>`;
$("#mainHeader").html(header);
