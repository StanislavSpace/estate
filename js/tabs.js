const tabsBtn = document.querySelectorAll(".tabs__navigation-link");
const tabsItems = document.querySelectorAll(".tabs__pages-item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains("tabs__navigation-link--active")) {
      tabsBtn.forEach(function (item) {
        item.classList.remove("tabs__navigation-link--active");
      });

      tabsItems.forEach(function (item) {
        item.classList.remove("tabs__pages-item--active");
      });

      currentBtn.classList.add("tabs__navigation-link--active");
      currentTab.classList.add("tabs__pages-item--active");
    }
  });
}
