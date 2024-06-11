document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("page-1").classList.add("active");
});

function nextPage(pageNumber) {
    const currentPage = document.querySelector(".page.active");
    currentPage.classList.remove("active");
    document.getElementById(`page-${pageNumber}`).classList.add("active");
}

function prevPage(pageNumber) {
    const currentPage = document.querySelector(".page.active");
    currentPage.classList.remove("active");
    const prevPageNumber = pageNumber - 1;
    document.getElementById(`page-${prevPageNumber}`).classList.add("active");
}

function submitQuiz() {
    const name = document.getElementById("name").value;
    const studentClass = document.getElementById("class").value;
    const answers = {
        q1: document.getElementById("q1").value,
        q6: document.getElementById("q6").value,
        q11: document.getElementById("q11").value,
    };

    console.log("Nama:", name);
    console.log("Kelas:", studentClass);
    console.log("Jawaban:", answers);

    document.querySelector(".container").classList.remove("active");
    document.getElementById("thank-you").classList.add("active");
}
