function dispalyProduct(products) {
  const productListEL = document.querySelector('#product-list');
  productListEL.innerHTML = ''; // 상품 목록 초기화

  products.forEach((product) => {
    const div = document.createElement('div'); // 상품의 이미지와 이름이 들어갈 껍데기
    div.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <p>상품 이름 ${product.name}, 가격: ${product.price}원</p>
    `;

    productListEL.append(div);
  });
}

// 상품 데이터(json mock)를 가져오는 함수
function fetchProducts() {
  fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
      dispalyProduct(data);
    })
    .catch((err) => console.log('상품 데이터를 불러오는데 실패했습니다.'));
}

fetchProducts();
