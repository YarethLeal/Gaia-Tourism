import {
  IonContent,
  IonIcon,
  IonThumbnail,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { bagHandleOutline, bagHandleSharp, businessOutline, businessSharp, mapOutline, mapSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Paquetes',
    url: '/Paquetes',
    iosIcon: bagHandleOutline,
    mdIcon: bagHandleSharp
  },
  {
    title: 'Empresas',
    url: '/Empresas',
    iosIcon: businessOutline,
    mdIcon: businessSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonItem className={location.pathname === '/Inicio' ? 'selected' : ''} routerLink={'/Inicio'} routerDirection="none" lines="none" detail={false}>
            <img slot='start' src='/assets/icon/gaia.png' alt='gaia logo' width={32} height={32}/>
            <IonLabel>Gaia Tourism</IonLabel>
          </IonItem>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
