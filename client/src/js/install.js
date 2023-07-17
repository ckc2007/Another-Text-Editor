const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  //  The event object contains information about the installation prompt. The code sets window.deferredPrompt to the event object, which allows us to trigger the installation prompt later.
  window.deferredPrompt = event;
  // This line removes the "hidden" class from the butInstall element, making it visible. The "hidden" class is typically used to hide the install button initially, and it will be shown only when the PWA is installable.
  butInstall.classList.toggle("hidded", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {});
