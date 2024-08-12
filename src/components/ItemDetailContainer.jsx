import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from "../data/productos.json";
import loadingGif from "../assets/loading.gif";

export const ItemDetailContainer = (props) => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    
    useEffect(() => {
        new Promise((resolve) => setTimeout(() => resolve(data), 2000))
        .then((response) => {
            const finded = response.find(i => i.id === Number(id));
            setItem(finded);
        })
        .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <img src={loadingGif} alt="Cargando..." />;

    if (!item) return <p>Producto no encontrado</p>;

    return (
        <Container className='mt-4'>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
            <img src={item.image} height={250} alt={item.title} />
            <br />
            <br />
            <b>${item.price}</b>
        </Container>
    );
}