window.addEventListener('DOMContentLoaded', function() {
    let status = document.getElementById("status");
    let display = document.getElementById("display");
  
    function updateOnlineStatus() {
      let condition = navigator.onLine ? "online connected..." : "offline not connected";
  
      status.className = condition;
      status.innerHTML = condition.toUpperCase();
      status.style.width = "230px"
  
    }
  
    window.addEventListener('online',  updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
  });