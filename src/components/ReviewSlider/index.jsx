import { cx } from 'linaria';
import * as React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import starImg from '../../images/star-icons.svg';
import { reviewSection } from './ReviewSlider.styles';

function ReviewSlider() {
  const settings = {
    className: 'center',
    dots: false,
    arrows: true,
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    centerPadding: '100px',
    slidesToShow: 3,
    speed: 500,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          centerPadding: '50px',
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '30px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          centerPadding: '200px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          adaptiveHeight: true,
          centerMode: false,
          centerPadding: '0',
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={cx(reviewSection)}>
      <div className="container">
        <h2 className="no-border">What Customers Say About Us</h2>
      </div>
      <div className="slider-holder">
        <Slider {...settings} className="reviews-slider">
          <div className="slick-slide">
            <div className="wrap">
              <div className="head">
                <div className="rating">
                  <img src={starImg} loading="eager" alt="img description" />
                  <span className="text">5.0</span>
                </div>
              </div>
              <span className="ico-quote" />
              <div className="text-box">
                <blockquote>
                  <strong className="title">Great Card, Great Service</strong>
                  <q>
                    I got this card a little over a month ago to help rebuild my credit. Their security deposit is easy
                    to hand in and you can do it in pieces, ex: $100 a week until all paid up. After my security deposit
                    was paid, the card came quickly. Activation was easy and it has been easy to use. Payments are also
                    easy to make if you are using online banking. All in all very satisfied with the service I have
                    received thus far.
                  </q>
                  <strong className="name">Joel.</strong>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="slick-slide">
            <div className="wrap">
              <div className="head">
                <div className="rating">
                  <img src={starImg} loading="eager" alt="img description" />
                  <span className="text">5.0</span>
                </div>
              </div>
              <div className="text-box">
                <span className="ico-quote" />
                <blockquote>
                  <strong className="title">Best customer service</strong>
                  <q>
                    In the beginning, I must say, I had difficulties speaking to any representative, But a few days
                    after I was contacted by an employee called: Mr. Maddox, very professional, and he did help me a
                    lot. I do highly recommend Plastk and big thanks to Mr. Maddox, I do highly appreciate his swift
                    response on many occasions.
                  </q>
                  <strong className="name">Hocine.</strong>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="wrap">
              <div className="head">
                <div className="rating">
                  <img src={starImg} loading="eager" alt="img description" />
                  <span className="text">5.0</span>
                </div>
              </div>
              <span className="ico-quote" />
              <div className="text-box">
                <blockquote>
                  <strong className="title">I love this card works wherever</strong>
                  <q>
                    I love this card works wherever. Just don&apos;t forget your PIN it is not CHANGEABLE!!!! The
                    payments are fast and the loading of security funds is easy payments post in 30 minutes. Normal
                    cards don&apos;t do that.
                  </q>
                  <strong className="name">David.</strong>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="slick-slide">
            <div className="wrap">
              <div className="head">
                <div className="rating">
                  <img loading="eager" src={starImg} alt="img description" />
                  <span className="text">5.0</span>
                </div>
              </div>
              <span className="ico-quote" />
              <div className="text-box">
                <blockquote>
                  <strong className="title">Plastk is easy and helpful</strong>
                  <q>
                    Plastk was easy to work with, fast, and efficient. They sent me my card quickly and the payment
                    system is super easy to navigate. It&apos;s helping me build up my credit after a few years of bad
                    luck.
                  </q>
                  <strong className="name">Samantha.</strong>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="wrap">
              <div className="head">
                <div className="rating">
                  <img loading="eager" src={starImg} alt="img description" />
                  <span className="text">5.0</span>
                </div>
              </div>
              <span className="ico-quote" />
              <div className="text-box">
                <blockquote>
                  <strong className="title">I was calling about my points</strong>
                  <q>
                    I was calling about my points. I had an issue about why my points are still not uploading to my
                    account. And I was told that it will take some time for the IT team to review it. Also, I ordered
                    another plastk Credit card. Due to my current one is chipping away slowly. The representative was
                    very helpful and punctual. Thank you
                  </q>
                  <strong className="name">Daniel.</strong>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="slick-slide">
            <div className="wrap">
              <div className="head">
                <div className="rating">
                  <img loading="eager" src={starImg} alt="img description" />
                  <span className="text">5.0</span>
                </div>
              </div>
              <span className="ico-quote" />
              <div className="text-box">
                <blockquote>
                  <strong className="title">Customer service is excellent!!</strong>
                  <q>
                    I spoke with Natalie for a while and she was so patient and helpful even though I felt silly with
                    all the questions I had to ask. I feel better and I understand my credit better after speaking with
                    MO. at 6 am his time. His courteous attitude was so refreshing although he is not generally a
                    customer service representative. He explained my credit files and best practices for maintaining
                    good credit. I’m super grateful and I will continue to be a stellar customer until my credit is back
                    to where it should be before my life turned upside down. Thank you for caring. #loyalcustomerforever
                  </q>
                  <strong className="name">Gab.</strong>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="wrap">
              <div className="head">
                <div className="rating">
                  <img loading="eager" src={starImg} alt="img description" />
                  <span className="text">5.0</span>
                </div>
              </div>
              <span className="ico-quote" />
              <div className="text-box">
                <blockquote>
                  <strong className="title">Great experience so far. </strong>
                  <q>
                    So far I have seen mixed reviews but my personal experience so far has been great. All my
                    communication has been either through live chat or by email and it has always been prompt. Changing
                    my address was a breeze. The times I called I couldn&apos;t get through but all the newer companies
                    are going towards the all-digital online trend anyways. And like I said that part was always prompt
                    and helpful.
                  </q>
                  <strong className="name">Justin.</strong>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="wrap">
              <div className="head">
                <div className="rating">
                  <img loading="eager" src={starImg} alt="img description" />
                  <span className="text">5.0</span>
                </div>
              </div>
              <span className="ico-quote" />
              <div className="text-box">
                <blockquote>
                  <strong className="title">Plastk is the best-secured card in Canada</strong>
                  <q>
                    The Plastk secured credit card is the best way in Canada to increase your credit score quickly. The
                    mobile app is amazing and comes partnered with a real-time Equifax credit report. Plastk also has a
                    rewards store to redeem points you earn from everyday purchases. Highly recommend this card to
                    anyone looking to increase their credit score.
                  </q>
                  <strong className="name">Richard.</strong>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="wrap">
              <div className="head">
                <div className="rating">
                  <img loading="eager" src={starImg} alt="img description" />
                  <span className="text">5.0</span>
                </div>
              </div>
              <span className="ico-quote" />
              <div className="text-box">
                <blockquote>
                  <strong className="title">In terms of a secured credit card</strong>
                  <q>
                    In terms of a secured credit card, it’s been great! The application process is easy and
                    straightforward (a big plus), and I believe is the only secured card, or “less than ideal credit”
                    card that actually offers SOMETHING for using it! This is nice for people whose situations are what
                    they are BUT ARE NOT treated poorly for it. The app is great, and everything is displayed nicely
                    while making a payment is equally a breeze. Overall happy I found this card, and hopefully, this
                    long-winded review will help someone else who was on the fence like me.
                  </q>
                  <strong className="name">Brett.</strong>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="wrap">
              <div className="head">
                <div className="rating">
                  <img loading="eager" src={starImg} alt="img description" />
                  <span className="text">5.0</span>
                </div>
              </div>
              <span className="ico-quote" />
              <div className="text-box">
                <blockquote>
                  <strong className="title">Best Secured credit card</strong>
                  <q>
                    I like having a direct payment email address that allows me to make a payment anytime and the fact
                    that it posts really quickly. The site is easy to navigate and looks great. I am really happy with
                    my Plastk Secured Credit Card. My favorite credit card out of the 5 cards I have. The website is
                    great and all the services you need are at your fingertips.
                  </q>
                  <strong className="name">Jacqueline.</strong>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="wrap">
              <div className="head">
                <div className="rating">
                  <img loading="eager" src={starImg} alt="img description" />
                  <span className="text">5.0</span>
                </div>
              </div>
              <span className="ico-quote" />
              <div className="text-box">
                <blockquote>
                  <strong className="title">Best secured Visa card</strong>
                  <q>
                    I love the secured Visa by PLASTK. I was approved and offered a decent card rate just by securing my
                    card. I couldn&apos;t be happier. The customer service is really good too. I recommend PLASTK to all
                    my friends and colleagues.
                  </q>
                  <strong className="name">Aaron.</strong>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="wrap">
              <div className="head">
                <div className="rating">
                  <img loading="eager" src={starImg} alt="img description" />
                  <span className="text">5.0</span>
                </div>
              </div>
              <span className="ico-quote" />
              <div className="text-box">
                <blockquote>
                  <strong className="title">My experience with Plastk secured</strong>
                  <q>
                    My experience with Plastk secured credit cards has been a positive one so far. I am looking forward
                    to what happens after I receive my new card in the mail. I&apos;m also looking forward to improving
                    my credit score. I&apos;m glad that I applied!
                  </q>
                  <strong className="name">Susan.</strong>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="wrap">
              <div className="head">
                <div className="rating">
                  <img loading="eager" src={starImg} alt="img description" />
                  <span className="text">5.0</span>
                </div>
              </div>
              <span className="ico-quote" />
              <div className="text-box">
                <blockquote>
                  <strong className="title">Simple & efficient.</strong>
                  <q>
                    Love my Plastk card, very happy with how easy the app is to use, and making payments is extremely
                    easy and reflects almost instantly. Great for what I need it for & would recommend it!
                  </q>
                  <strong className="name">Caitlyne.</strong>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="wrap">
              <div className="head">
                <div className="rating">
                  <img loading="eager" src={starImg} alt="img description" />
                  <span className="text">5.0</span>
                </div>
              </div>
              <span className="ico-quote" />
              <div className="text-box">
                <blockquote>
                  <strong className="title">The best Secured Credit Card in Canada</strong>
                  <q>
                    Plastk secured credit card helped me to build my credit rating up and at the same time to boost my
                    credit file and now I was approved with an unsecured credit card. Thank you Plastk.
                  </q>
                  <strong className="name">Ejam.</strong>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="wrap">
              <div className="head">
                <div className="rating">
                  <img loading="eager" src={starImg} alt="img description" />
                  <span className="text">5.0</span>
                </div>
              </div>
              <span className="ico-quote" />
              <div className="text-box">
                <blockquote>
                  <strong className="title">Great Experience. </strong>
                  <q>
                    So far my experience has been great. A great card to help build my credit and I love that payments
                    go on immediately!!
                  </q>
                  <strong className="name">Colleen.</strong>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="wrap">
              <div className="head">
                <div className="rating">
                  <img loading="eager" src={starImg} alt="img description" />
                  <span className="text">5.0</span>
                </div>
              </div>
              <span className="ico-quote" />
              <div className="text-box">
                <blockquote>
                  <strong className="title">There has been an issue with the PIN</strong>
                  <q>
                    There has been an issue with the PIN number at the very beginning. Vivien and the staff have been
                    extremely patient and professional in trying to resolve the issue. I’m hoping the issue will be
                    resolved soon. Thanks all for your help.
                  </q>
                  <strong className="name">Bruce.</strong>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="wrap">
              <div className="head">
                <div className="rating">
                  <img loading="eager" src={starImg} alt="img description" />
                  <span className="text">5.0</span>
                </div>
              </div>
              <span className="ico-quote" />
              <div className="text-box">
                <blockquote>
                  <strong className="title">I have been with Plastk card for over</strong>
                  <q>
                    I have been with Plastk card for over two months, I can honestly say, I have not had any bad
                    experience with Plastk from their card services, they have been a wonderful partner for me. Whenever
                    I have had to contact them, I always received great customer service and they immediately addressed
                    and handled whatever was of concern to me. I am staying put with them, I recommend them to any
                    person who intends to get a prepaid credit card.
                  </q>
                  <strong className="name">Erik.</strong>
                </blockquote>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default ReviewSlider;
