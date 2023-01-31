const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
  });

sr.reveal("section", { origin: "top", delay: 200 });
sr.reveal("header", { origin: "top", delay: 200 });
sr.reveal(".education", { origin: "left", delay: 200 });
sr.reveal(".experience", { origin: "right", delay: 200 });
sr.reveal(".card", {origin: "left", delay: 300});
