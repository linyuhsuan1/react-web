# À l'aise
## 簡介
+ 前台: 所有商品、商品細項展示，購物車功能、下單、結帳資訊。
+ 後台: 使用 WooCommerce 商品管理（新增/修改/刪除）、訂單管理。

### 主要練習
+ React
+ React Hook 
+ 使用 Tailwind CSS UI Library
+ RWD

## 使用外掛
+ [Swiper](https://swiperjs.com/)
## 前台內容介紹
### 首頁
- 使用 Swiper 輪播套件
![](https://github.com/linyuhsuan1/react-web/blob/master/src/picture/pic-1.png)

### 商品列表
- 最新上架的商品
- 顯示更多按鈕可取得更多商品
- 使用 useCallback 減少不必要的re-render
![](https://github.com/linyuhsuan1/react-web/blob/master/src/picture/pic-2.png)

### 商品細項
- 使用 useParams 取得 ID 帶入商品，顯示單一商品詳細介紹，選擇數量加入購物車，可顯示目前所有商品總數量
- 使用 useContext 全域管理加入、刪除的商品數量、品項
![](https://github.com/linyuhsuan1/react-web/blob/master/src/picture/pic-3.png)

### 購物車
- 顯示購物車內容，可更改商品數量或移除商品
- 使用 useContext 全域管理加入、刪除的商品數量、品項
- 如狀態為未登入時，點擊 Checkout 無法進入填寫訂購資料頁
![](https://github.com/linyuhsuan1/react-web/blob/master/src/picture/pic-4.png)


### 登入頁
- 登入成功後，選單會改成登出
- 如先前在購物車頁，登入成功後，會直接導頁至填寫訂購資料頁
![](https://github.com/linyuhsuan1/react-web/blob/master/src/picture/pic-5.png)

### 填寫資料頁
- 當所有資料填寫完成，才可進行結帳
![](https://github.com/linyuhsuan1/react-web/blob/master/src/picture/pic-6.png)
### 訂單成立
- 結帳後送出訂單，顯示訂單編號
![](https://github.com/linyuhsuan1/react-web/blob/master/src/picture/pic-7.png)


