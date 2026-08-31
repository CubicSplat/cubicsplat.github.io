const copyButton = document.querySelector("[data-copy-citation]");
const citation = document.querySelector("#bibtex code");

copyButton?.addEventListener("click", async () => {
  if (!citation) return;
  const label = copyButton.textContent;

  try {
    await navigator.clipboard.writeText(citation.textContent.trim());
    copyButton.textContent = "Copied";
  } catch {
    const range = document.createRange();
    range.selectNodeContents(citation);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
    copyButton.textContent = "Selected";
  }

  window.setTimeout(() => {
    copyButton.textContent = label;
  }, 1600);
});
