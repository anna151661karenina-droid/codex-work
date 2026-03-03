const toggleTipButton = document.querySelector("#toggle-tip");
const deploymentTip = document.querySelector("#deployment-tip");

if (toggleTipButton && deploymentTip) {
  toggleTipButton.addEventListener("click", () => {
    const isHidden = deploymentTip.hasAttribute("hidden");
    if (isHidden) {
      deploymentTip.removeAttribute("hidden");
      toggleTipButton.textContent = "Hide deployment tip";
      return;
    }

    deploymentTip.setAttribute("hidden", "");
    toggleTipButton.textContent = "Show deployment tip";
  });
}
