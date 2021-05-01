import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import {
  Button, CardFooter
} from 'reactstrap';
import userApi from 'src/api/userlogin';
import InputField from 'src/custom-fields/InputField';
import * as Yup from 'yup';




function QuanLiUser() {

  const initialValues = {
    tenuser: '',
    email: '',
    chucvu: '',
    sdt: '',
    username: '',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    tenuser: Yup.string().required('Vui lòng nhập tên user'),
    email: Yup.string().required('Vui lòng nhập email'),
    chucvu: Yup.string().required('Vui lòng nhập chức vụ'),
    sdt: Yup.number().required('Vui lòng nhập số điện thoại'),
    username: Yup.string().required('Vui lòng nhập tên đăng nhập'),
    password: Yup.string().required('Vui lòng nhập tên mật khẩu')
  })

  const handleSubmitForm = async (values) => {
    //call service register
    await userApi.register(values)
      .then(response => {
        toast.success("Tạo tài khoản user thành công");
      })
      .catch(error => toast.error("error from server ", error))
    
  }


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => handleSubmitForm(values)}
    >
      {formikProps => {

        return (
          <>
            <CRow>
              <CCol sm="12" xl="12">
                <CCard>
                  <CCardHeader>
                    Thông tin user
                  </CCardHeader>
                  <CCardBody>
                    <Form action="" className="form-horizontal">
                      <FastField
                        name="tenuser"
                        component={InputField}

                        label="Tên user"
                        placeholder="Tên user..."
                      />


                      <FastField
                        name="email"
                        component={InputField}

                        label="Email"
                        placeholder="Email..."
                      />

                      <FastField
                        name="chucvu"
                        component={InputField}

                        label="Chức vụ"
                        placeholder="Chức vụ..."
                      />

                      <FastField
                        name="sdt"
                        component={InputField}

                        label="Số điện thoại"
                        placeholder="Số điện thoại..."
                        type="number"
                      />

                      <FastField
                        name="username"
                        component={InputField}

                        label="Thông tin đăng nhập"
                        placeholder="Tên đăng nhập..."
                      />

                      <FastField
                        name="password"
                        component={InputField}

                        label=""
                        placeholder="Mật khẩu..."
                      />

                      <CardFooter>
                        <Button type="submit" size="sm" color="primary" ><i className="fa fa-dot-circle-o"></i>Tạo tài khoản thủ kho</Button>
                      </CardFooter>
                    </Form>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
            <ToastContainer />
          </>
        )
      }}
    </Formik>
  );
}

export default QuanLiUser;