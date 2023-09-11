# Abonelik Paketi Oluşturucu

Bu projede dinamik olarak abonelik paketleri ve bu paketlere ait özellikler ekleyip kaldırabilirsiniz.
Eklenen abonelik paketleri ve özellikler, bir JSON verisi olarak kaydedilir ve bu veri daha sonra farklı platformlarda da kullanılabilir.

## Özellikler

- Dinamik olarak paket ekleme & kaldırma
- Dinamik olarak paket özellikleri ekleme & kaldırma
- Otomatik JSON veri oluşturma
- Manuel olarak JSON verisini güncelleme
- Bootstrap ile responsiv tasarım

## Kurulum

1. Projeyi Github reposundan klonlayın: `git clone git@github.com:rtanersonmez/dynamic-subscription-pack-builder.git`
2. Projeyi kendi lokal sunucunuzda çalıştırın.

## Kullanım

1. **Yeni Paket Ekleme:** Yeni bir abonelik paketi eklemek için "Yeni Paket" butonuna tıklayın.
2. **Yeni Özellik Ekleme:** Yeni bir özellik eklemek için "Yeni Özellik" butonuna tıklayın.
3. **JSON Güncelleme: Mevcut** tabloyu manuel olarak güncellemek için "Tabloyu Güncelle" butonuna tıklayın.

### Ek Bilgi
- Paket ya da özellik silmek için ilgili `<td>` içerisine `<button class="btn btn-danger" onclick="deleteFunction(this)">Sil</button>` eklemeniz yeterlidir.
- Oluşan veriyi almak için `jsonData` id'li gizli bir input bulunmaktadır. Bu input, oluşan tablonun JSON versiyonunu saklar.

# Katkıda Bulunma

Bu proje açık kaynaklıdır ve katkıda bulunmak isteyen herkese açıktır. Katkıda bulunmak için aşağıdaki adımları takip edebilirsniz:

1. Projeyi forklayın.
2. Klonlayın: `git clone [git@github.com:rtanersonmez/dynamic-subscription-pack-builder.git]`
3. Yeni bir branch oluşturun: git checkout -b `[branch-adınız]`
4. Değişikliklerinizi yapın ve commit edin: `git commit -am 'Değişiklikler hakkında açıklama`
5. Branch'inizi push edin: `git push origin [branch-adınız]`
6. Pull request oluşturun.

# Lisans

Bu proje MIT Lisansı ile lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına göz atabilirsiniz.