import React from "react";
import { ListGroupItem } from "reactstrap";
import "../../styles/cart-item.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";

const CartItem = ({ item }) => {
  const { id, title, price, image01, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };
  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <ListGroupItem className="cart__item border-0">
      <div className="cart__item-info d-flex gap-2">
        <img src={image01} alt="product-img" />
        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div className="">
            <h6 className="cart__product-title">{title}</h6>
            <p className="cart__product-price d-flex align-items-center gap-5">
              {quantity}x <span>${totalPrice}</span>
            </p>
            <div className="increase__decrease-btn d-flex align-items-center justify-content-between">
              <span className="increase-btn" onClick={incrementItem}>
                <i className="ri-add-line"></i>
              </span>
              <span className="quantity"> {quantity}</span>
              <span className="decrease-btn" onClick={decreaseItem}>
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>

          <span className="delete__btn" onClick={deleteItem}>
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
