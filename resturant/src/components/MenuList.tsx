import React from 'react';
import { useCart } from '../context/CartContext';
import { Card, Button } from 'react-bootstrap';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface MenuListProps {
  items: MenuItem[];
}

const MenuList: React.FC<MenuListProps> = ({ items }) => {
  const { addToCart } = useCart();

  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="col-md-4 mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Img
              variant="top"
              src={item.image}
              alt={item.name}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>{item.name}</Card.Title>
              <Card.Text className="flex-grow-1">{item.description}</Card.Text>
              <Card.Text className="text-danger fw-bold mb-3">
                ${item.price.toFixed(2)}
              </Card.Text>
              <Button
                variant="danger"
                className="w-100"
                onClick={() => addToCart({
                  id: index + 1,
                  name: item.name,
                  price: item.price,
                  image: item.image
                })}
              >
                <i className="fas fa-cart-plus me-2"></i>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
};

export default MenuList;
