function timedRedirection(seconds, targetUrl) {
  setTimeout(() => {
    window.location.href = targetUrl;
  }, seconds * 1000);
}
