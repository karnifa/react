import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authAPI from '../../api/authAPI';

const navigationButton = (navigate) => {
  const handleNavigate = () => {
    navigate('/');
  };

  return handleNavigate;
};

const handleSubmit = async (formData,navigate,resetForm) => {  
  try {      
    const response = await authAPI.register(formData); // Usando authAPI para registrar        
    if (response.email != null) {
      toast.success('Usuário registrado com sucesso!',{autoClose: 2000})
      resetForm();
      setTimeout(() => {
        navigate('/login');          
      }, 2000);       
      
    }
  } catch (err) {     
    if (err.response) {
      console.error('Error response data:', err.response.data);
      console.error('Error response status:', err.response.status);
      console.error('Error response headers:', err.response.headers);
      toast.error(`Error registering user: ${err.response.data.message || err.response.status}`);      
    } else if (err.request) {
      console.error('Error request:', err.request);
      toast.error('No response received from the server.');
    } else {
      console.error('Error message:', err.message);
      toast.error(`Error registering user: ${err.message}`);
    }
  }
};

export { navigationButton, handleSubmit };
