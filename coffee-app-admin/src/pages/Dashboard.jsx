import React, { useState, useEffect } from 'react';
import CoffeeForm from '../components/CoffeeForm.jsx';
import CoffeeList from '../components/CoffeeList.jsx';
import { initialCoffeeList } from '../interfaces/coffeeData';

const Dashboard = () => {
  // LocalStorage'dan verileri çek, yoksa varsayılan listeyi yükle
  const [coffees, setCoffees] = useState(() => {
    const savedCoffees = localStorage.getItem('coffee_menu');
    return savedCoffees ? JSON.parse(savedCoffees) : initialCoffeeList;
  });

  const [editingCoffee, setEditingCoffee] = useState(null);

  // Kahve listesi her değiştiğinde LocalStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('coffee_menu', JSON.stringify(coffees));
  }, [coffees]);

  // 1. CREATE (Ekleme İşlemi)
  const handleAddCoffee = (newCoffee) => {
    setCoffees([...coffees, newCoffee]);
  };

  // 2. DELETE (Silme İşlemi)
  const handleDeleteCoffee = (id) => {
    if (window.confirm("Bu kahveyi menüden silmek istediğinize emin misiniz?")) {
      const updatedList = coffees.filter(coffee => coffee.id !== id);
      setCoffees(updatedList);
    }
  };

  // 3. UPDATE (Güncelleme İşlemi)
  const handleUpdateCoffee = (updatedCoffee) => {
    const updatedList = coffees.map(coffee => 
      coffee.id === updatedCoffee.id ? updatedCoffee : coffee
    );
    setCoffees(updatedList);
    setEditingCoffee(null); // Düzenleme modundan çık
  };

  return (
    <div className="container py-5">
      {/* Üst Başlık */}
      <div className="text-center mb-5">
        <h1 className="fw-bold" style={{ color: '#C9B183' }}>
          <i className="bi bi-cup-hot me-2"></i> COFFEE APP - YÖNETİM PANELİ
        </h1>
        <p className="text-light opacity-75">
           İşletmenizin kahve menüsünü, ürün ve fiyat bilgilerini dinamik olarak güncellemenize olanak tanıyan kontrol paneli
        </p>
      </div>

      {/* Form Bileşeni */}
      <CoffeeForm
        onAddCoffee={handleAddCoffee}
        onUpdateCoffee={handleUpdateCoffee}
        editingCoffee={editingCoffee}
        setEditingCoffee={setEditingCoffee}
      />

      {/* Liste Bileşeni */}
      <CoffeeList
        coffees={coffees}
        onDeleteCoffee={handleDeleteCoffee}
        onEditClick={(coffee) => {
          setEditingCoffee(coffee);
          window.scrollTo({ top: 0, behavior: 'smooth' }); // Düzenleye basıldığında forma kaydır
        }}
      />
    </div>
  );
};

export default Dashboard;
