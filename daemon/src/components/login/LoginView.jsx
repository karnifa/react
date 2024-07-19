// src/components/LoginView.js

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../context/AuthContext';
import backgroundImage from '../../assets/fundorpg.PNG';
import frameImage from '../../assets/fundoForm.PNG';
import './Login.css';

const LoginView = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const initialValues = {
    login: '',
    senha: '',
  };

  const validationSchema = Yup.object({
    login: Yup.string().required('O nome de usuário é obrigatório'),
    senha: Yup.string().required('A senha é obrigatória'),
  });

  const handleLogin = async (values, { setSubmitting }) => {    
    try {
      await login(values);
      toast.success('Login realizado com sucesso!', { autoClose: 2000 });
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (error) {
      console.error('Erro de login:', error);
      if (error.response && error.response.data.message) {
        toast.error(`Erro: ${error.response.data.message}`);
      } else {
        toast.error('Erro desconhecido ao tentar fazer login');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className="background">
        <img src={backgroundImage} alt="Background" />
      </div>
      <div className="frame">
        <img src={frameImage} alt="Frame" />
        <div className="form-content">
          <div className="logo">
            <h1>Sistema Daemon</h1>
          </div>
          <div className="welcome-message">
            <p>Bem vindo ao sistema de RPG Daemon, aqui você poderá gerenciar suas aventuras da melhor forma</p>
          </div>
          <div className="login-form">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="login">Login</label>
                    <Field
                      type="text"
                      id="login"
                      name="login"
                      autoComplete="login"
                      required
                    />
                    <ErrorMessage name="login" component="div" className="error-message" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="senha">Senha</label>
                    <Field
                      type="password"
                      id="senha"
                      name="senha"
                      autoComplete="current-password"
                      required
                    />
                    <ErrorMessage name="senha" component="div" className="error-message" />
                  </div>
                  <div className="buttons">
                    <button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Logging in...' : 'Login'}
                    </button>
                    <button type="button" onClick={() => navigate('/register')}>
                      Criar nova conta
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginView;