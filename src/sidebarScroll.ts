const storageKey = "self-taught-finance:sidebar-scroll";

export function preserveSidebarScroll() {
  const restore = () => {
    const sidebar = document.querySelector<HTMLElement>(".sidebar");
    if (!sidebar) return false;

    const savedPosition = Number(sessionStorage.getItem(storageKey) ?? 0);
    sidebar.scrollTop = savedPosition;
    sidebar.addEventListener("scroll", () => {
      sessionStorage.setItem(storageKey, String(sidebar.scrollTop));
    }, { passive: true });
    return true;
  };

  if (!restore()) {
    const observer = new MutationObserver(() => {
      if (restore()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  document.addEventListener("click", (event) => {
    const link = (event.target as Element).closest(".sidebar a");
    const sidebar = link?.closest<HTMLElement>(".sidebar");
    if (sidebar) {
      sessionStorage.setItem(storageKey, String(sidebar.scrollTop));
      document.body.classList.remove("menu-open");
    }
  }, { capture: true });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") document.body.classList.remove("menu-open");
  });
}
