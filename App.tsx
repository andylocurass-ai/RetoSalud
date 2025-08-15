import { useState } from 'react';

function App() {
  const retos = [
    'Toma un vaso de agua ahora mismo',
    'Haz 15 sentadillas',
    'Respira profundamente 5 veces',
    'Haz 20 saltos de tijera',
    'Camina en el lugar durante 1 minuto',
    'Estírate tocando tus pies por 20 segundos',
    'Haz 10 flexiones de brazos',
    'Da gracias por 3 cosas que tengas hoy',
    'Haz un estiramiento de cuello por 30 segundos',
    'Sonríe durante 15 segundos seguidos 😁',
    'Haz 10 abdominales',
    'Cierra los ojos y relájate por 1 minuto',
    'Sube y baja escaleras durante 2 minutos',
    'Come una fruta hoy',
    'Haz un estiramiento de brazos por 30 segundos',
  ];

  const [reto, setReto] = useState('');

  const generarReto = () => {
    const randomIndex = Math.floor(Math.random() * retos.length);
    setReto(retos[randomIndex]);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg,#16a34a,#0d9488)',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
      }}
    >
      <h1>🍏 Retos de Salud</h1>
      <button
        onClick={generarReto}
        style={{
          padding: '12px 24px',
          border: 'none',
          borderRadius: '10px',
          background: '#14532d',
          color: 'white',
          fontSize: '18px',
          cursor: 'pointer',
        }}
      >
        Sacar reto
      </button>
      {reto && (
        <p style={{ marginTop: '20px', fontSize: '20px', maxWidth: '400px' }}>
          {reto}
        </p>
      )}
    </div>
  );
}

export default App;
