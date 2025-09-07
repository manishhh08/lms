import React from "react";
import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";

const UserDetail = () => {
  const { user } = useSelector((store) => store.userStore);
  const dispatch = useDispatch();
  // const [editMode, setEditMode] = useState(false);
  return <p>this is user page</p>;
};

export default UserDetail;
