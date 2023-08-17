import { IonContent, IonList, IonItem, IonPage } from "@ionic/react";
import Header from "../../components/Header/Header";
import { productItems as testData } from "./sampleProducts";
import Card from "../../components/Card/Card";
import styles from "./Products.module.scss"

const Products: React.FC = () => {
    const productItems = testData;
    return (
        <IonPage>
            <Header title="Products" link="/about" linkLabel="About Me"/>
            <IonContent>
                <IonList className={styles.list}>
                    {productItems.map((product)=>
                        <Card title={product.name} price={product.price} image={product.image}>
                            <p>Sample Product Description</p>
                        </Card>)}
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default Products