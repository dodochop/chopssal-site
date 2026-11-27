/* 모든 화면이 같이 쓰는 것: 심볼, 알림 띠, 메뉴, 바닥, 장바구니 */

const SYMBOL_SPRITE = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="symbol" viewBox="70 70 553 490">
    <g transform="translate(10.03 6.1)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <path d="M162.5 231.5C200.608 231.5 231.5 200.608 231.5 162.5C231.5 124.392 200.608 93.5 162.5 93.5C124.392 93.5 93.5 124.392 93.5 162.5C93.5 200.608 124.392 231.5 162.5 231.5Z" fill="var(--face)" stroke-width="27"/>
      <path d="M510.5 231.5C548.608 231.5 579.5 200.608 579.5 162.5C579.5 124.392 548.608 93.5 510.5 93.5C472.392 93.5 441.5 124.392 441.5 162.5C441.5 200.608 472.392 231.5 510.5 231.5Z" fill="var(--face)" stroke-width="27"/>
      <path d="M336.5 108.5C344.046 100.199 353.629 94.0113 364.3 90.5497C374.971 87.0881 386.361 86.4723 397.343 88.7633C408.325 91.0542 418.519 96.1726 426.916 103.612C435.313 111.051 441.622 120.554 445.22 131.18C454.987 127.09 465.653 125.623 476.161 126.923C486.67 128.223 496.656 132.247 505.131 138.594C513.607 144.941 520.277 153.393 524.481 163.111C528.685 172.829 530.277 183.477 529.1 194C538.851 195.082 548.15 198.692 556.078 204.471C564.005 210.251 570.286 218.001 574.299 226.953C578.311 235.906 579.916 245.751 578.956 255.515C577.995 265.278 574.501 274.622 568.82 282.62C576.319 288.616 582.123 296.466 585.657 305.393C589.191 314.32 590.332 324.016 588.969 333.52C587.605 343.024 583.783 352.007 577.881 359.581C571.98 367.154 564.203 373.055 555.32 376.7C558.859 386.239 559.843 396.537 558.176 406.574C556.509 416.611 552.247 426.038 545.814 433.92C539.381 441.802 530.999 447.866 521.5 451.511C512.001 455.156 501.715 456.256 491.66 454.7C490.418 465.594 486.351 475.974 479.862 484.813C473.374 493.652 464.689 500.642 454.668 505.092C444.647 509.542 433.638 511.297 422.73 510.182C411.822 509.068 401.395 505.124 392.48 498.74C386.739 508.481 378.554 516.556 368.737 522.165C358.919 527.775 347.807 530.726 336.5 530.726C325.193 530.726 314.081 527.775 304.263 522.165C294.445 516.556 286.261 508.481 280.52 498.74C271.605 505.124 261.178 509.068 250.27 510.182C239.362 511.297 228.353 509.542 218.332 505.092C208.311 500.642 199.626 493.652 193.138 484.813C186.649 475.974 182.582 465.594 181.34 454.7C171.285 456.256 160.999 455.156 151.5 451.511C142.001 447.866 133.619 441.802 127.186 433.92C120.753 426.038 116.491 416.611 114.824 406.574C113.157 396.537 114.141 386.239 117.68 376.7C108.797 373.055 101.02 367.154 95.1188 359.581C89.2171 352.007 85.3953 343.024 84.0315 333.52C82.6677 324.016 83.8092 314.32 87.3431 305.393C90.877 296.466 96.6807 288.616 104.18 282.62C98.4991 274.622 95.0053 265.278 94.0444 255.515C93.0835 245.751 94.6888 235.906 98.7014 226.953C102.714 218.001 108.995 210.251 116.922 204.471C124.85 198.692 134.149 195.082 143.9 194C142.723 183.477 144.315 172.829 148.519 163.111C152.723 153.393 159.393 144.941 167.869 138.594C176.344 132.247 186.33 128.223 196.839 126.923C207.347 125.623 218.013 127.09 227.78 131.18C231.378 120.554 237.687 111.051 246.084 103.612C254.481 96.1726 264.675 91.0542 275.657 88.7633C286.639 86.4723 298.029 87.0881 308.7 90.5497C319.371 94.0113 328.954 100.199 336.5 108.5Z" fill="var(--face)" stroke-width="27"/>
      <path d="M285.5 408.5C294.5 426.5 327.5 426.5 336.5 396.5C345.5 426.5 378.5 426.5 387.5 408.5" fill="none" stroke-width="18"/>
    </g>
    <g transform="translate(10.03 6.1)" fill="currentColor">
      <circle cx="240.5" cy="342.5" r="22.8"/>
      <circle cx="432.5" cy="342.5" r="22.8"/>
      <ellipse cx="336.5" cy="378.5" rx="25.2" ry="18.6"/>
    </g>
  </symbol>
</svg>`;

const Cart = {
  key: 'chopssal-cart',
  read() { try { return JSON.parse(localStorage.getItem(this.key)) || {}; } catch { return {}; } },
  write(items) { try { localStorage.setItem(this.key, JSON.stringify(items)); } catch {} updateCartCount(); },
  add(id, qty) { const c = this.read(); c[id] = Math.min(99, (c[id] || 0) + qty); this.write(c); },
  set(id, qty) { const c = this.read(); if (qty < 1) delete c[id]; else c[id] = Math.min(99, qty); this.write(c); },
  count() { return Object.values(this.read()).reduce((a, b) => a + b, 0); },
};

function updateCartCount() {
  const two = n => String(n).padStart(2, '0');
  const n = Cart.count();
  document.querySelectorAll('[data-cart-count]').forEach(el => {
    el.textContent = two(n);
    el.closest('a').setAttribute('aria-label', `장바구니, 담긴 상품 ${n}개`);
  });
}

const two = n => String(n).padStart(2, '0');

document.body.insertAdjacentHTML('afterbegin', `
${SYMBOL_SPRITE}
<header class="menu">
  <a class="wordmark" href="index.html" aria-label="CHOPSSAL 홈">CHOPSSAL</a>
  <nav class="menu__links" aria-label="주요 메뉴">
    <a href="shop.html">제품 <i>${two(PRODUCTS.length)}</i></a>
    <a href="index.html#story">이야기</a>
    ${SHOP_OPEN ? '<a class="menu__cart" href="cart.html">장바구니 <i data-cart-count>00</i></a>' : ''}
  </nav>
</header>`);

document.body.insertAdjacentHTML('beforeend', `
<footer class="foot">
  <div class="wrap foot__in">
    <div>
      <a class="wordmark" href="index.html" aria-label="CHOPSSAL 홈">CHOPSSAL</a>
      <p>너와 나란히, 포근한 매일</p>
    </div>
    <ul>
      <li><a href="mailto:hello.chopssal@gmail.com">hello.chopssal@gmail.com</a></li>
      <li><a href="https://www.instagram.com/hello.chopssal" target="_blank" rel="noopener">인스타그램</a></li>
      <li><a href="https://www.threads.net/@hello.chopssal" target="_blank" rel="noopener">스레드</a></li>
    </ul>
    <p class="foot__note">${SHOP_OPEN ? '' : '제품은 아직 준비하고 있어요. 지금 보이는 제품 사진은 화면을 잡기 위한 예시 사진(Unsplash)이고, 찹쌀 제품이 아니에요.'}</p>
  </div>
</footer>`);

const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.menu__links a').forEach(a => {
  if (a.getAttribute('href') === here) a.setAttribute('aria-current', 'page');
});
updateCartCount();
