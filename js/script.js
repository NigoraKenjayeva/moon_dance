document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
        mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
    });
});

document.querySelectorAll("[data-dialog]").forEach(button => {
    button.addEventListener("click", ()=> {
      const dialog = document.querySelector(`#${button.dataset.dialog}`);
      dialog.showModal();
      
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      
      dialog.querySelector(".closeDialog").addEventListener("click", () => {
        dialog.close();
        document.body.style.removeProperty("overflow");
        document.documentElement.style.removeProperty("overflow");
      })
    })
  })