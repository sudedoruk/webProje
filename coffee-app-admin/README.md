# ☕ COFFEE APP - YÖNETİM PANELİ

Bu proje, işletmelerin kahve menülerini, ürün fiyatlarını ve kategori bilgilerini tek bir ekrandan dinamik olarak yönetmesini sağlayan, **React.js** ve **Bootstrap** kullanılarak geliştirilmiş modern bir kontrol arayüzüdür.

Tarayıcı tabanlı veri kalıcılığı (**LocalStorage**) altyapısıyla çalışır; bu sayede eklenen, güncellenen veya silinen ürünler sayfa yenilendiğinde kaybolmaz.

---

## 🚀 Proje Özellikleri (CRUD İşlemleri)

* **Create (Ekleme):** Yeni kahve adı, fiyatı, boyutu, kategorisi ve görsel URL'si ile menüye ürün ekleyebilme. (Görsel girilmezse otomatik fincan görseli atanır).
* **Read (Listeleme):** Eklenen ürünleri özel tasarım rozetler ve şık bir tablo arayüzü ile görüntüleme.
* **Update (Güncelleme):** Mevcut ürünlerin bilgilerini forma geri yükleyerek anlık olarak değiştirebilme.
* **Delete (Silme):** Kullanıcı onayı (`window.confirm`) alınarak istenen ürünü menüden kaldırma.
* **Veri Kalıcılığı:** `useEffect` hook'u sayesinde tüm menü verilerinin `LocalStorage` üzerinde güvenle saklanması.

---

## 📁 Dosya ve Klasör Yapısı (Mimari)

Proje, modern React mimarisine ve yönerge kurallarına tam uygun olarak bileşenlere (component), sayfalara (page) ve veri arayüzlerine (interface) ayrılmıştır:

```text
coffee-app-admin/
│
├── public/                 # Statik dosyalar
│
└── src/                    # Ana Kaynak Klasörü
    │
    ├── components/         # Yeniden Kullanılabilir Arayüz Bileşenleri
    │   ├── CoffeeForm.jsx  # Kahve ekleme ve güncelleme formu
    │   └── CoffeeList.jsx  # Aktif menü listesi ve veri tablosu
    │
    ├── pages/              # Sayfa Görünümleri
    │   └── Dashboard.jsx   # Ana yönetim paneli ekranı (state ve LocalStorage yönetimi)
    │
    ├── interfaces/         # Başlangıç ve Varsayılan Veriler
    │   └── coffeeData.js   # Uygulama ilk açıldığında yüklenen menü listesi
    │
    ├── assets/             # Görseller ve ikonlar
    ├── App.jsx             # Ana bileşen kurgusu
    ├── main.jsx            # React DOM başlatıcı dosya
    └── index.css           # Özelleştirilmiş koyu kahve / kurumsal tema stilleri
---
## 🛠️ Kullanılan Teknolojiler

* **Frontend:** React.js (Vite), HTML5, CSS3

* **UI Kütüphanesi:** Bootstrap 5 & Bootstrap Icons

* **Veri Yönetimi:** React Hooks (useState, useEffect) & Browser LocalStorage

* **Tasarım Konsepti:** Koyu Kahve / Altın vurgulu, tamamen şeffaf tablo tasarımlı ve responsive UI/UX
