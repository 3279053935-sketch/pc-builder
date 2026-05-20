// v2.12.17 Rebirth 全站小交互
(function () {
  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }
  ready(function () {
    document.body.classList.add("rebirth-page");
    const list = document.querySelector(".updates-list");
    if (list) {
      const cards = Array.from(list.querySelectorAll(".update-card"));
      if (cards.length > 3 && !document.querySelector(".updates-toggle")) {
        list.classList.add("is-collapsed");
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "updates-toggle";
        const refresh = function () {
          const collapsed = list.classList.contains("is-collapsed");
          btn.textContent = collapsed ? `展开历史版本（还有 ${cards.length - 3} 条）` : "收起历史版本";
          btn.setAttribute("aria-expanded", String(!collapsed));
        };
        btn.addEventListener("click", function () {
          list.classList.toggle("is-collapsed");
          refresh();
        });
        refresh();
        list.insertAdjacentElement("afterend", btn);
      }
    }
  });
})();
