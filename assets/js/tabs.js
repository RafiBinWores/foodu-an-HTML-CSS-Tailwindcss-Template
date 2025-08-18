 // Tabs logic
      document.addEventListener("DOMContentLoaded", () => {
        const tabs = document.querySelectorAll("#menuTabs a[data-tab]");
        const panes = document.querySelectorAll("#menuPanes [data-pane]");

        function activate(key) {
          // toggle tab button styles
          tabs.forEach((t) => {
            const active = t.dataset.tab === key;
            t.classList.toggle("bg-customRed-100", active);
            t.classList.toggle("text-white", active);
            t.classList.toggle("bg-white", !active);
          });

          // show/hide panes
          panes.forEach((p) => {
            p.classList.toggle("hidden", p.dataset.pane !== key);
          });
        }

        // click handlers
        tabs.forEach((t) => {
          t.addEventListener("click", (e) => {
            e.preventDefault();
            activate(t.dataset.tab);
          });
        });

        // initial state (keep whatever tab is already styled active)
        const current =
          Array.from(tabs).find((t) =>
            t.classList.contains("bg-customRed-100")
          ) || tabs[0];
        activate(current.dataset.tab);
      });