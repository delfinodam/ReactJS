import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import data from "../data/productos.json";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import loadingGif from "../assets/loading.gif";

export const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    useEffect(() => {
        setLoading(true);

        new Promise((resolve, reject) => setTimeout(() => resolve(data), 2000))
        .then((response) => {
            if(!id) {
                setItems(response);
            } else {
                const filtered = response.filter((i) => i.category === id);
                setItems(filtered);
            }
    })
    .finally(() => setLoading(false));
    },[id]);

    if(loading) return <img src={loadingGif} alt="Cargando..." />;
    
    return (
        <Container className='mt-4 grid-container'>
        {items.map(i => 
            <Card key = {i.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={i.image} />
                <Card.Body>
                    <Card.Title>{i.title}</Card.Title>
                    <Card.Text>
                    {i.description}
                    </Card.Text>
                    <Link to={`/item/${i.id}`}>
                        <Button variant="primary">Ver
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        )}
        </Container>
    );
}

