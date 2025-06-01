import React from 'react';
import TariffCards from './Card/TariffCard';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Тарифные планы</h1>

    <div className='tariff-container'>
    <TariffCards
      title='Безлимитный 300'
      price='300'
      speed='до 10 Мбит/сек'
      footer='Объем включенного трафика не ограничен'
      headerColor='#26c5a9'
      bodyColor='#5cd6c1'
      isHighlighted={false}
      />


      <TariffCards
      title='Безлимитный 450'
      price='450'
      speed='до 50 Мбит/сек'
      footer='Объем включенного трафика не ограничен'
      headerColor='#1ec281'
      bodyColor='#1eae75'
      isHighlighted={false}
      />

      <TariffCards
      title='Безлимитный 550'
      price='550'
      speed='до 100 Мбит/сек'
      footer='Объем включенного трафика не ограничен'
      headerColor='#e12d52'
      bodyColor='#bf314e'
      isHighlighted={true}
      />

      <TariffCards
      title='Безлимитный 1000'
      price='1000'
      speed='до 200 Мбит/сек'
      footer='Объем включенного трафика не ограничен'
      headerColor='#252222'
      bodyColor='#474747'
      isHighlighted={false}
      />
    </div>
    </div>
  );
}

export default App;
