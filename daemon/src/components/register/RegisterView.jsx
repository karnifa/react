import React from 'react';
import backgroundImage from '../../assets/fundorpg.PNG';
import frameImage from '../../assets/fundoForm.PNG';
import { useNavigate } from 'react-router-dom';
import { handleSubmit } from './Register';
import Campo from './Campo';
import { Formik } from 'formik';
import * as yup from 'yup';
import './Register.css';
import 'react-toastify/dist/ReactToastify.css';

const RegisterView = () => {
  const navigate = useNavigate();

  const esquema = yup.object({
    firstName: yup.string().required('O primeiro nome é obrigatório').max(30, 'O nome deve ter no máximo 30 caracteres.'),
    lastName: yup.string().required('O último nome é obrigatório').max(30, 'O nome deve ter no máximo 30 caracteres.'),
    email: yup.string().required('O email é obrigatório').email('O formato do email é inválido'),
    birthday: yup.date().required('A data de nascimento é obrigatória').max(new Date(), 'Data inválida'),
    password: yup.string().required('O password é obrigatório'),
    phone: yup.string().required('O telefone é obrigatório')
  });

  return (
    <div className="container">
      <div className="background">
        <img src={backgroundImage} alt="Background" />
      </div>
      <div className="frame register">
        <img className="imgForm" src={frameImage} alt="Frame" />
        <div className="form-content register">
          <div className="logo">
            <h1>Daemon RPG</h1>
          </div>
          <div className="welcome-message">
            <p>Welcome to the world of Daemon, where dark adventures await you.</p>
          </div>
          <div className="login-form">
            <Formik
              initialValues={{ firstName: '', lastName: '', email: '', birthday: '', password: '', phone: '' }}
              validationSchema={esquema}
              onSubmit={(values,{resetForm}) => {
                handleSubmit(values, navigate, resetForm);
              }}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
                  <Campo id="firstName" name="firstName" type="text" label="First Name" />                 
                  <Campo id="lastName" name="lastName" type="text" label="Last Name" />                  
                  <Campo id="email" name="email" type="email" label="Email" />                 
                  <Campo id="birthday" name="birthday" type="date" label="Birthday" />                  
                  <Campo id="phone" name="phone" type="text" label="Phone" />                  
                  <Campo id="login" name="login" type="text" label="Login" />                  
                  <Campo id="password" name="password" type="password" label="Password" autoComplete="true" />                  
                  <div className="buttons">
                    <button type="submit">Register</button>
                    <button type="button" onClick={() => navigate('/login')}>Back to Login</button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>     
    </div>
  );
};

export default RegisterView;