import React, {useState} from 'react';
import TariffCards from './Card/TariffCard';
import './App.css';
import tariffData from './tariffData';

function App() {

  const [selectedTariff, setSelectedTariff] = useState(null);
  
  const handleTariffSelect = (tariffTitle) => {
    setSelectedTariff(tariffTitle);

  }
  return (
    <div className="App">
    <h1>Тарифные планы</h1>

    <div className='tariff-container'>
      {tariffData.map((tariff, index) => (
    <TariffCards
    key={index}
      title={tariff.title}
      price={tariff.price}
      speed={tariff.speed}
      footer={tariff.footer}
      headerColor={tariff.headerColor}
      bodyColor={tariff.bodyColor}
      isHighlighted={selectedTariff === tariff.title}
      onSelect = {handleTariffSelect}
      />
      ))}

      {selectedTariff && (
        <div className='selectedTariff'>
          <h3>Выбран тариф: {selectedTariff} </h3>
        </div>
      )}
    </div>
    </div>
  );
}

export default App;
