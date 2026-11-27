/* 제품 데이터.
   지금 들어 있는 것은 모두 화면을 잡기 위한 가상의 제품이에요. 이름과 가격은 예시이고,
   사진은 Unsplash(unsplash.com)의 무료 사진을 주소로 불러와요. 찹쌀 제품 사진이 아니에요.
   실제 제품을 등록할 때는 이 목록만 바꾸면 돼요. 직접 찍은 사진은 image 에 파일 경로를 넣어요
   (예: image: 'assets/products/bag-cream.jpg'). */

/* 판매를 열었는지. false 이면 가격, 장바구니, 담기 버튼을 숨기고 '준비 중'으로 보여요.
   실제 제품을 등록하고 결제를 붙인 뒤 true 로 바꿔요. */
const SHOP_OPEN = false;

const CATEGORIES = [
  { id: 'bag', name: '이동가방' },
  { id: 'home', name: '방석·하우스' },
  { id: 'bowl', name: '식기' },
  { id: 'walk', name: '산책' },
  { id: 'wear', name: '의류' },
];

const PRODUCTS = [
  { id: 'front-bag', cat: 'bag', name: '나란히 이동가방', price: 128000, tag: '첫 제품',
    photo: 'photo-1542617711-b5f5abf63090',
    desc: '앞으로 메기도 하고 크로스로 메기도 하는 가방이에요.' },
  { id: 'backpack', cat: 'bag', name: '나란히 백팩', price: 139000,
    photo: 'photo-1661322506572-83e26fdfbcef',
    desc: '두 손이 자유로워야 하는 날에 메는 가방이에요.' },
  { id: 'sling-bag', cat: 'bag', name: '나란히 슬링백', price: 118000,
    photo: 'photo-1661322563051-15248c0568a1',
    desc: '가까운 곳에 잠깐 나갈 때 한쪽 어깨에 메요.' },
  { id: 'cushion', cat: 'home', name: '포근 방석', price: 58000,
    photo: 'photo-1535126320463-c5c1b26b3e66',
    desc: '가방 안에 깔아도 되고, 카페 의자에 올려도 되는 방석이에요.' },
  { id: 'house', cat: 'home', name: '포근 하우스', price: 78000,
    photo: 'photo-1581888227599-779811939961',
    desc: '몸을 말고 쉬기 좋은 둥근 하우스예요.' },
  { id: 'bowl', cat: 'bowl', name: '말랑 식기', price: 32000,
    photo: 'photo-1714068691210-073dc52c6c1d',
    desc: '집에서 쓰다가 그대로 들고 나가는 식기예요.' },
  { id: 'leash', cat: 'walk', name: '매일 리드줄', price: 29000,
    photo: 'photo-1708062270853-ee7c66b69f07',
    desc: '손에 감기는 느낌이 부드러운 리드줄이에요.' },
  { id: 'knit', cat: 'wear', name: '포근 니트', price: 39000, tag: '준비 중', soldout: true,
    photo: 'photo-1591946600248-29d495003cac',
    desc: '입히고 벗기기 쉬운 니트예요.' },
];

/* 확인용 가방이 있으면(이 컴퓨터에서만) 예시 가방 자리에 대신 넣어요 */
if (typeof LOCAL_PREVIEW !== 'undefined') {
  const rest = PRODUCTS.filter(p => p.cat !== 'bag');
  PRODUCTS.length = 0;
  PRODUCTS.push(...LOCAL_PREVIEW, ...rest);
}

/* 돌려 보기: 제품에 frames: ['앞.jpg', '옆.jpg', ...] 를 넣으면 흰 배경 사진을 오려 낸 것처럼 띄우고,
   눌렀을 때 그 사진들을 차례로 넘겨 돌아가는 것처럼 보여 줘요. 장수가 많을수록 부드러워요(24장 안팎 권장). */

/* 사진 주소. w, h 는 잘라 낼 크기(픽셀) */
function photoUrl(p, w, h) {
  return p.image || (p.frames && p.frames[0]) || `https://images.unsplash.com/${p.photo}?auto=format&fit=crop&w=${w}&h=${h}&q=75`;
}
function productImage(p, w = 800, h = 800) {
  return `<img ${p.frames ? 'class="cut" ' : ''}src="${photoUrl(p, w, h)}" alt="${p.name} 예시 사진">`;
}
const won = n => n.toLocaleString('ko-KR') + '원';
const priceText = p => !SHOP_OPEN ? '준비 중' : p.soldout ? '곧 만나요' : won(p.price);
const findProduct = id => PRODUCTS.find(p => p.id === id);
const catName = id => CATEGORIES.find(c => c.id === id).name;

function productCard(p) {
  return `<a class="card" href="product.html?id=${p.id}">
    <span class="card__img">${productImage(p, 800, 1000)}${p.tag && (SHOP_OPEN || !p.soldout) ? `<span class="tag card__tag">${p.tag}</span>` : ''}</span>
    <span class="card__name">${p.name}</span>
    <span class="card__price">${priceText(p)}</span>
  </a>`;
}
