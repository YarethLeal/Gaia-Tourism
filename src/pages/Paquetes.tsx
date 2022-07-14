import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonModal, IonPage, IonRow, IonSelect, IonSelectOption, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import PaqueteModal from '../components/PaqueteModal';

import paquete from '../service/service-paquete';

function decision(map: Boolean, data: any) {
  if (map) {
    return data.map((paqueteData: any) => {
      return (
        <IonItem>
          <IonThumbnail slot="start">
            <img src="https://source.unsplash.com/collection/410546" />
          </IonThumbnail>
          <IonLabel>
            <h1>{paqueteData.lugar}</h1>
            <p>Lugar turistico: {paqueteData.tipo}</p>
            <p>Precio: {paqueteData.precio}</p>
            <p>Cantidad de personas: {paqueteData.cant_personas}</p>
            <p>Empresa: {paqueteData.empresa}</p>
          </IonLabel>
        </IonItem>
      );
    })
  }
  else {
    return (
      <IonItem>
        <IonThumbnail slot="start">
          <img src="https://source.unsplash.com/collection/410546" />
        </IonThumbnail>
        <IonLabel>
          <h1>{data.lugar}</h1>
          <p>Lugar turistico: {data.tipo}</p>
          <p>Precio: {data.precio}</p>
          <p>Cantidad de personas: {data.cant_personas}</p>
          <p>Empresa: {data.empresa}</p>
        </IonLabel>
      </IonItem>
    );
  }
}

const Paquetes: React.FC = () => {
  const [dataPaquete, setDataPaquete] = useState<any>([]);
  const [dataLugar, setDataLugar] = useState<any>([]);
  const [map, setMapStatus] = useState<Boolean>(true);
  const { control, handleSubmit } = useForm();

  const buscar = (formData: any) => {
    formData = ['', formData['lugar'], '', formData['precio'], formData['cantidad'], formData['empresa']];
    paquete.getBuscar(formData).then(response => {
      setMapStatus(false);
      setDataPaquete(response);
    });
  };

  useEffect(() => {
    paquete.getPaquetes().then(response => {
      setMapStatus(true);
      setDataPaquete(response);
    });
    paquete.getLugares().then(response => {
      setDataLugar(response);
    });
  }, [setDataPaquete, setMapStatus])


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Paquetes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Paquetes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonToolbar>
          <IonGrid>
            <form onSubmit={handleSubmit(buscar)} name="formPaquete">
              <IonRow>
                <IonCol>
                  <IonItem>
                    <Controller
                      render={
                        ({
                          field: { onChange, onBlur, value }
                        }) =>
                        (
                          <IonSelect onIonChange={onChange} value={value} onIonBlur={onBlur} placeholder="Lugar...">
                            {dataLugar.map((lugarData: any) => {
                              return (
                                <IonSelectOption value={lugarData.lugar}>{lugarData.lugar}</IonSelectOption>
                              );
                            })}
                          </IonSelect>
                        )
                      }
                      control={control}
                      name="lugar"
                    />
                  </IonItem>
                </IonCol>
                <IonCol>
                  <IonItem>
                    <Controller
                      render={
                        ({
                          field: { onChange, onBlur, value }
                        }) =>
                        (
                          <IonSelect onIonChange={onChange} value={value} onIonBlur={onBlur} placeholder="Precio...">
                            <IonSelectOption value="100">100-199</IonSelectOption>
                            <IonSelectOption value="200">200-299</IonSelectOption>
                            <IonSelectOption value="300">300-399</IonSelectOption>
                            <IonSelectOption value="400">400-499</IonSelectOption>
                            <IonSelectOption value="500">500-599</IonSelectOption>
                            <IonSelectOption value="600">600-699</IonSelectOption>
                            <IonSelectOption value="700">700-799</IonSelectOption>
                            <IonSelectOption value="800">800-899</IonSelectOption>
                            <IonSelectOption value="900">900-999</IonSelectOption>
                          </IonSelect>
                        )
                      }
                      control={control}
                      name="precio"
                    />
                  </IonItem>
                </IonCol>
                <IonCol>
                  <IonItem>
                    <Controller
                      render={
                        ({
                          field: { onChange, onBlur, value }
                        }) =>
                        (
                          <IonInput onIonChange={onChange} value={value} onIonBlur={onBlur} type='number' min={5} max={15} placeholder="Cantidad de personas" />
                        )
                      }
                      control={control}
                      name="cantidad"
                    />
                  </IonItem>
                </IonCol>
                <IonCol>
                  <IonItem>
                    <Controller
                      render={
                        ({
                          field: { onChange, onBlur, value }
                        }) =>
                        (
                          <IonSelect onIonChange={onChange} value={value} onIonBlur={onBlur} placeholder="Empresas...">
                            <IonSelectOption value="1">Beer Group</IonSelectOption>
                            <IonSelectOption value="2">Costa Rica Te Enamora</IonSelectOption>
                            <IonSelectOption value="3">Zboncak-Thiel</IonSelectOption>
                            <IonSelectOption value="4">Gulgowski-Marvin</IonSelectOption>
                            <IonSelectOption value="05">Stokes-Schumm</IonSelectOption>
                          </IonSelect>
                        )
                      }
                      control={control}
                      name="empresa"
                    />
                  </IonItem>
                </IonCol>
                <IonCol>
                  <IonButton color={'success'} type='submit'>Buscar</IonButton>
                </IonCol>
              </IonRow>
            </form>
          </IonGrid>
        </IonToolbar>
        <IonList>
          {
            decision(map, dataPaquete)
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Paquetes;