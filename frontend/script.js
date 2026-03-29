async function fetchData() {
  const res = await fetch("http://127.0.0.1:8000/status");
  const data = await res.json();
  const card = document.querySelector(".card");
card.className = "card " + data.current_source.toLowerCase();

  let icon = "🔥";

  if (data.current_source === "Solar") {
    icon = "🌞";
  } else if (data.current_source === "Electric") {
    icon = "⚡";
  }

  document.getElementById("source").innerText =
    "Current Source: " + data.current_source;

  document.getElementById("icon").innerText = icon;
}

setInterval(fetchData, 2000);
