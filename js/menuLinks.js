const menuLinks = document.querySelectorAll('.menu li a');

menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // 阻止默認的鏈接行為

    // 移除所有 li 元素的 active 類別
    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach(item => item.classList.remove('active'));

    // 為點擊的 li 元素添加 active 類別
    const menuItem = event.target.parentNode;
    menuItem.classList.add('active');

    // 獲取鏈接的目標網址
    const href = event.target.getAttribute('href');

    // 跳轉到目標網址
    window.location.href = href;
  });
});