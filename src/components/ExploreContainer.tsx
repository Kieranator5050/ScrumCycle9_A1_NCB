import styles from './ExploreContainer.module.scss';
import { IonList, IonItem, IonLabel } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className={styles.container}>
      <strong>Welcome !</strong>
      <IonList className={styles.list}>
        <IonItem className={styles.link} routerLink='/about'>
          <IonLabel>Learn about me</IonLabel>
        </IonItem>
        <IonItem className={styles.link}  routerLink='/products'>
          <IonLabel>View Products</IonLabel>
        </IonItem>
      </IonList>
    </div>
  );
};

export default ExploreContainer;
