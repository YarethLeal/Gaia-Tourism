import React from 'react';
import { IonSlides, IonSlide, IonContent, IonImg } from '@ionic/react';
import './Slide.css';

// Optional parameters to pass to the swiper instance.
// See https://swiperjs.com/swiper-api for valid options.
const slideOpts = {
  initialSlide: 1,
  speed: 400,
  autoplay: {
    delay: 1500
  }
};

const Slide: React.FC = () => (
  <IonContent>
    <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
        <IonImg src="https://source.unsplash.com/collection/381380" />
      </IonSlide>
      <IonSlide>
        <IonImg src="https://p4.wallpaperbetter.com/wallpaper/252/716/942/sea-leisure-lagoon-summer-wallpaper-preview.jpg" />
      </IonSlide>
      <IonSlide>
        <IonImg src="https://images.squarespace-cdn.com/content/v1/58597a19e58c62ba7fa48bf9/1593049801576-IJGC781M4TIM3S2T7NXK/unnamed.jpg" />
      </IonSlide>
    </IonSlides>
  </IonContent>
);
export default Slide;
