import React from 'react';

const CoffeeList = ({ coffees, onDeleteCoffee, onEditClick }) => {
  if (coffees.length === 0) {
    return (
      <div className="alert alert-warning text-center card-coffee my-4" role="alert">
        <i className="bi bi-info-circle me-2"></i>
        Menüde henüz hiç kahve bulunmuyor. Yukarıdaki formdan yeni bir kahve ekleyebilirsiniz!
      </div>
    );
  }

  return (
    <div className="card card-coffee p-4 shadow">
      <h4 className="mb-4 text-warning">
        <i className="bi bi-cup-hot-fill me-2"></i>
        Aktif Menü Listesi ({coffees.length} Ürün)
      </h4>
      <div className="table-responsive">
        <table className="table table-coffee align-middle mb-0">
          <thead>
            <tr>
              <th>Görsel</th>
              <th>Kahve Adı</th>
              <th>Kategori</th>
              <th>Boyut</th>
              <th>Fiyat</th>
              <th className="text-end">İşlemler (Düzenle / Sil)</th>
            </tr>
          </thead>
          <tbody>
            {coffees.map((coffee) => (
              <tr key={coffee.id}>
                <td>
                  <img
                    src={coffee.image}
                    alt={coffee.name}
                    className="rounded"
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                </td>
                <td className="fw-bold">{coffee.name}</td>
                <td><span className="badge bg-secondary px-3 py-2">{coffee.category}</span></td>
                <td>{coffee.size}</td>
                <td className="text-warning fw-bold">{coffee.price} ₺</td>
                <td className="text-end">
                  <button
                    className="btn btn-sm btn-outline-warning me-2"
                    onClick={() => onEditClick(coffee)}
                    title="Düzenle"
                  >
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => onDeleteCoffee(coffee.id)}
                    title="Sil"
                  >
                    <i className="bi bi-trash me-1"></i> Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoffeeList;