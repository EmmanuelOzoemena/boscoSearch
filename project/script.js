function searchStudent() {
  const input = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();
  const resultDiv = document.getElementById("result");

  // Clear previous result
  resultDiv.innerHTML = "";

  // Find student
  const student = students.find(
    (search) => search.name.toLowerCase() === input
  );

  if (student) {
    resultDiv.innerHTML = `
      <img src="${student.img}" alt="${student.name}">
      <h2>${student.name}</h2>
      <p>Future Tech Leader 🚀</p>
    `;
  } else {
    resultDiv.innerHTML = `<p style="color:red; font-size:18px;">No student found 😢</p>`;
  }
}
