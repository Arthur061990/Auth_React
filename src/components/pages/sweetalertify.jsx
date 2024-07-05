import React from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

function SweetAlertify() {

  const showErrorAlert = (message) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message || 'Hubo un error.',
    });
  };

  const showSuccessAlert = (message) => {
    Swal.fire({
      icon: 'success',
      title: 'Éxito!',
      text: message || 'Operación exitosa.',
    });
  };

  return null; // SweetAlertify no renderiza ningún contenido visible

}

export default SweetAlertify;
