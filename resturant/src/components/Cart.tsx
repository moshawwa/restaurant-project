import React from 'react';
import { useCart } from '../context/CartContext';
import { Button, Modal } from 'react-bootstrap';

interface CartProps {
  show: boolean;
  onHide: () => void;
}

const Cart: React.FC<CartProps> = ({ show, onHide }) => {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {items.length === 0 ? (
          <p className="text-center">Your cart is empty</p>
        ) : (
          <>
            {items.map((item) => (
              <div key={item.id} className="d-flex align-items-center mb-3 p-3 border-bottom">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '15px' }}
                />
                <div className="flex-grow-1">
                  <h5 className="mb-1">{item.name}</h5>
                  <p className="mb-1 text-danger">${item.price.toFixed(2)}</p>
                  <div className="d-flex align-items-center">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="me-2"
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="me-2"
                    >
                      +
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-end mt-3">
              <h4>Total: ${totalPrice.toFixed(2)}</h4>
              <Button variant="danger" size="lg" className="w-100">
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default Cart; 