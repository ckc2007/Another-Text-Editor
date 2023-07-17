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
// handles PWA installation when button is clicked
butInstall.addEventListener("click", async () => {
  // assigns the event containing the PWA installation prompt)to the variable promptEvent
  const promptEvent = window.defferedPrompt;
  //  checks if promptEvent is null or undefined. If it is, the function returns early, meaning there is no PWA installation prompt to trigger.
  if (!promptEvent) {
    return;
  }
  // triggers the PWA installation prompt, showing the user the option to install the application on their device.
  promptEvent.prompt();
  // After triggering the prompt, window.deferredPrompt is set to null to clean up the reference
  window.deferredPrompt = null;
  // adds the "hidden" class back to the butInstall element, hiding it again after the user clicks the install button.
  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
//  triggered when the PWA is successfully installed on the user's device
window.addEventListener("appinstalled", (event) => {
  // sets window.deferredPrompt to null, ensuring that there are no references to the installation prompt after the PWA is installed.
  window.deferredPrompt = null;
});
