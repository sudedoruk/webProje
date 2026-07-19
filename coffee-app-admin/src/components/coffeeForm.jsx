import React, { useState, useEffect } from 'react';

const CoffeeForm = ({ onAddCoffee, onUpdateCoffee, editingCoffee, setEditingCoffee }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    size: 'Küçük',
    category: 'Sıcak Kahveler',
    image: ''
  });

  useEffect(() => {
    if (editingCoffee) {
      setFormData(editingCoffee);
    } else {
      setFormData({
        name: '',
        price: '',
        size: 'Küçük',
        category: 'Sıcak Kahveler',
        image: ''
      });
    }
  }, [editingCoffee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) {
      alert("Lütfen kahve adı ve fiyatını giriniz!");
      return;
    }

    const finalImage = formData.image.trim() !== '' 
      ? formData.image 
      : 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop&q=60';

    const coffeeDataToSubmit = {
      ...formData,
      image: finalImage
    };

    if (editingCoffee) {
      onUpdateCoffee(coffeeDataToSubmit);
    } else {
      onAddCoffee({ ...coffeeDataToSubmit, id: Date.now() });
    }

    setFormData({
      name: '',
      price: '',
      size: 'Küçük',
      category: 'Sıcak Kahveler',
      image: ''
    });
  };

  return (
    <div className="card card-coffee p-4 mb-4 shadow">
      <h4 className="mb-3 text-warning">
        <i className={`bi ${editingCoffee ? 'bi-pencil-square' : 'bi-plus-circle-fill'} me-2`}></i>
        {editingCoffee ? 'Kahveyi Güncelle' : 'Yeni Kahve Ekle'}
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-3">
            <label className="form-label">Kahve Adı</label>
            <input
              type="text"
              className="form-control bg-dark text-light border-secondary"
              name="name"
              placeholder="Örn: Flat White"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Fiyat (₺)</label>
            <input
              type="number"
              className="form-control bg-dark text-light border-secondary"
              name="price"
              placeholder="150"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Boyut</label>
            <select
              className="form-select bg-dark text-light border-secondary"
              name="size"
              value={formData.size}
              onChange={handleChange}
            >
              <option value="Küçük">Küçük</option>
              <option value="Orta">Orta</option>
              <option value="Büyük">Büyük</option>
            </select>
          </div>
          <div className="col-md-2">
            <label className="form-label">Kategori</label>
            <select
              className="form-select bg-dark text-light border-secondary"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Sıcak Kahveler">Sıcak Kahveler</option>
              <option value="Soğuk Kahveler">Soğuk Kahveler</option>
              <option value="Özel Lezzetler">Özel Lezzetler</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">Görsel URL (İsteğe Bağlı)</label>
            <input
              type="text"
              className="form-control bg-dark text-light border-secondary"
              name="image"
              placeholder="https://... (boş kalabilir)"
              value={formData.image}
              onChange={handleChange}
            />
          </div>
          <div className="col-12 mt-3 d-flex gap-2">
            <button type="submit" className="btn btn-accent px-4 py-2">
              <i className="bi bi-check-lg me-1"></i>
              {editingCoffee ? 'Değişiklikleri Kaydet' : 'Menüye Ekle'}
            </button>
            {editingCoffee && (
              <button
                type="button"
                className="btn btn-outline-light"
                onClick={() => setEditingCoffee(null)}
              >
                İptal
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CoffeeForm;