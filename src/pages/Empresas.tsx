import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState, useEffect} from 'react';
import paquete from '../service/service-paquete';

const Empresas: React.FC = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    paquete.getEmpresas().then(response => {
      setData(response);
    });
  }, [])
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Empresas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Empresas</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {data.map((empresaData: any) => {
            return (
              <IonCard id={empresaData.empresa}>
                <IonCardHeader>
                  <IonCardTitle>{empresaData.empresa}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>{empresaData.descripcion}</p>
                </IonCardContent>
              </IonCard>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Empresas;