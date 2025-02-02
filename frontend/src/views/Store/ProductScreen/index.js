import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Row,
  Col,
  Container,
  Button,
  Image,
  ListGroupItem,
  ListGroup,
  Form,
} from "react-bootstrap";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { FacebookIcon } from "react-share";

import Rating from "../../../components/Rating";

import { Link } from "react-router-dom";

import Loader from "../../../components/Loader";
import Message from "../../../components/Message";

import { callApi } from "../../../api";
import { actions } from "../../../constants/productConstants";

import "./styles.css";
const qtys = [1, 2, 3, 4, 5, 6, 7, 8];
const initialState = {
  name: "",
  comment: "",
  rating: 0,
  user: null,
};
export default function ProductScreen({ history, match }) {
  const productId = match.params.id;
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const [rating, setRating] = useState(initialState);

  const productDetails = useSelector((state) => state.productDetails);
  const {
    error: errorDetails,
    loading: loadingDetails,
    success: successDetails,
    product,
  } = productDetails;
  const addToCartHandler = (e) => {
    userInfo
      ? history.push(`/cart/${product.prodId}?qty=${qty}`)
      : history.push("/login");
  };
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReview = useSelector((state) => state.productReview);
  const {
    loading: loadingRev,
    success: successRev,
    error: errorRev,
  } = productReview;

  const handleChange = (event) => {
    setRating({
      ...rating,
      [event.target.name]: event.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      callApi(
        `/api/products/createreview/${product?.prodId}/`,
        "POST",
        rating,
        {
          SUCESS: actions.PRODUCT_REVIEW_SUCCESS,
          REQUEST: actions.PRODUCT_REVIEW_REQUEST,
          FAIL: actions.PRODUCT_REVIEW_FAIL,
        },
        false,
        userInfo?.token
      )
    );
  };
  useEffect(() => {
    dispatch(
      callApi(
        `/api/products/getproduct/${productId}/`,
        "GET",
        {},
        {
          SUCESS: actions.PRODUCT_DETAILS_SUCCESS,
          FAIL: actions.PRODUCT_DETAILS_FAIL,
          REQUEST: actions.PRODUCT_DETAILS_REQUEST,
        }
      )
    );
    if (userInfo) {
      setRating({
        ...rating,
        ["name"]: userInfo?.name,
        ["user"]: userInfo?.id,
      });
    }
  }, [productId, history, userInfo, successRev]);
  useEffect(() => {
    dispatch({ type: actions.PRODUCT_REVIEW_RESET });
  }, [history]);
  return loadingDetails ? (
    <div style={{ minHeight: "100vh", marginTop: "15vh" }}>
      <Loader />
    </div>
  ) : errorDetails ? (
    <div style={{ minHeight: "100vh", marginTop: "15vh" }}>
      <Message variant="danger">{errorDetails}</Message>
    </div>
  ) : (
    <div
      style={{ marginTop: "10vh", overflowX: "hidden", marginBottom: "5vh" }}
    >
      <Container className="p-5" data-aos={"fade-down"}>
        <div>
          <Link to="/">
            <Button>
              {" "}
              <i className="fas fa-exchange-alt"></i> Regresar
            </Button>
          </Link>
          <h1 className="text-primary mt-3">{product?.prodName}</h1>
          {/* {product?.categorie["name"] && (
            <h5 className="text-dark">
              Categoria: {product?.categorie["name"]}
            </h5>
          )} */}
        </div>
      </Container>
      <Container>
        <Row>
          <Col md={5}>
            <Zoom>
              <img
                className="image-product"
                src={`https://res.cloudinary.com/jordiespinoza/${product?.prodPic}`}
              />
            </Zoom>
          </Col>
          <Col md={4} className="p-5">
            <h1>
              $ {product?.prodPrice}
              MXN
            </h1>
            <Rating value={product?.rating} color="#d3a007" />
            <a
              href={`https://www.facebook.com/sharer/sharer.php?s=100&p[url]=https://obioshop.herokuapp.com/#/products/${productId}&p[images][0]=&p[title]=Title%20Goes%20Here&p[summary]=Description%20goes%20here!`}
              target="_blank"
            >
              <button type="button" class="btn btn-facebook btn-lg">
                <i class="fab fa-facebook-f"></i> Compartir en Facebook
              </button>
            </a>
            <span>{product?.prodDesc}</span>
            {/* <br/>
            <FacebookIcon /> */}
            <br />
            <br />
            <h6>
              Cantidad a comprar <i class="fas fa-shopping-basket"></i>
            </h6>
            <Form.Control
              as="select"
              className="mb-3"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            >
              {qtys.map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </Form.Control>
            <Button
              variant="success"
              type="button"
              onClick={addToCartHandler}
              className="btn btn-primary"
            >
              Añadir al carro <i className="fas fa-shopping-cart"></i>
            </Button>
          </Col>
          <Col md={3}>
            {userInfo ? (
              <Form onSubmit={submitHandler}>
                <Form.Group>
                  <Form.Label>Calificación</Form.Label>
                  <Form.Control
                    as="select"
                    // value={rating}
                    onChange={(e) =>
                      setRating({
                        ...rating,
                        ["rating"]: e.target.value,
                      })
                    }
                  >
                    <option value="0">Selecciona una opción</option>
                    <option value="1">1 - Muy malo</option>
                    <option value="2">2 - Malo</option>
                    <option value="3">3 - Bueno</option>
                    <option value="4">4 - Muy bueno</option>
                    <option value="5">5 - Excelente</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Comentarios</Form.Label>
                  <Form.Control
                    as="textarea"
                    row="5"
                    name="comment"
                    onChange={handleChange}
                    // value={comment}
                    // onChange={(e) => setComment(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                {errorRev && (
                  <Message variant="danger">Ingresa una calificación</Message>
                )}
                {successRev && (
                  <Message variant="success">Review agregada</Message>
                )}
                {loadingRev ? (
                  <Loader />
                ) : (
                  <Button variant="success" type="submit">
                    Enviar
                  </Button>
                )}
              </Form>
            ) : (
              <Message variant="info">
                Para realizar una review debes hacer{" "}
                <Link to="/login">login</Link>
              </Message>
            )}
            <h3>Comentarios</h3>
            <ListGroup variant="flush">
              {product?.reviews?.map((item) => (
                <ListGroup.Item>
                  <strong>{item.revName}</strong>
                  <Rating value={item.revRating} color="#d3a007" />
                  <p>{item.revDate.substring(0, 10)}</p>
                  <p>{item.revComment}</p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
        <hr />
      </Container>
    </div>
  );
}
