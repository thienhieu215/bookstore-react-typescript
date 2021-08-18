import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createCheckOutInfo } from './../../store/slices/checkoutSlice'
import style from './Dialog.module.scss'

export interface Account {
  fullname: string,
  email: string,
  address: string,
  phone: string,
}

const CheckoutDialog = ({ isOpen, handleClose, title, agreeContent, closeContent }: CheckoutDialogProps) => {

  const dispatch = useDispatch()
  var open: boolean = isOpen
  const { register, handleSubmit, formState: { errors }, setError, control, setValue, getValues } = useForm<Account>();

  const createUser = (data: Account): void => {
    dispatch(createCheckOutInfo(data))
    open = false
  }

  console.log(open, 'as')
  return (
    <Modal centered show={open} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit(createUser)}>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Full Name</Form.Label>
            <Form.Control type='text' placeholder="Enter your full name..." isInvalid={!!errors.fullname}
              {...register("fullname",
                {
                  required: { value: true, message: "This field is required" },
                  pattern: { value: /^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/, message: 'Invalid Fullname' },
                })
              } />
            <Form.Control.Feedback type="invalid">{errors?.fullname?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type='text' placeholder="Enter your email..." isInvalid={!!errors.email}
              {...register("email",
                {
                  required: { value: true, message: "This field is required" },
                  pattern: { value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'Invalid Email' },
                })
              } />
            <Form.Control.Feedback type="invalid">{errors?.email?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control type='text' placeholder="Enter your shipping address..." isInvalid={!!errors.address}
              {...register("address",
                {
                  required: { value: true, message: "This field is required" },
                })
              } />
            <Form.Control.Feedback type="invalid">{errors?.address?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" placeholder="Enter your phone number..." isInvalid={!!errors.phone}
              {...register("phone",
                {
                  required: { value: true, message: "This field is required" },
                  minLength: { value: 10, message: "Invalid phone number" },
                  maxLength: { value: 11, message: "Invalid phone number" }
                })
              } />
            <Form.Control.Feedback type="invalid">{errors?.phone?.message}</Form.Control.Feedback>
          </Form.Group>

        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">{closeContent}</Button>
          <button className={style.confirmBtn} type="submit">{agreeContent}</button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

type CheckoutDialogProps = {
  isOpen: boolean,
  handleClose: () => void,
  title: string,
  agreeContent: string,
  closeContent: string,
}

export default CheckoutDialog;
