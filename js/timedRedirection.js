function timedRedirection(seconds, targetUrl, openInNewTab = false) {
  setTimeout(() => {
    if (openInNewTab) {
      window.open(targetUrl, '_blank');
    } else {
      window.location.href = targetUrl;
    }
  }, seconds * 1000);
}
