// Função para filtrar por nome ou categoria
function filterTable() {
  var input, filter, table, tr, td, i, j, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("courseTable");
  tr = table.getElementsByTagName("tr");

  var categoryFilter = document.getElementById("categoryFilter").value;

  // Percorre todas as linhas da tabela e oculte aquelas que não correspondem à consulta de pesquisa
  for (i = 1; i < tr.length; i++) {
    tr[i].style.display = "none"; // Hide row by default

    // Filtrar por texto na primeira coluna (nome do curso)
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        // Verifica o filtro de categoria
        if (categoryFilter === "" || tr[i].getAttribute("data-category") === categoryFilter) {
          tr[i].style.display = ""; // Mostra
        }
      }
    }
  }
}


// Função para contar cursos
function contarCursos() {
    const tabela = document.getElementById('courseTable');
    const linhas = tabela.getElementsByTagName('tr');
    const quantidadeCursos = linhas.length;

    // Exibir o resultado
    document.getElementById('resultado').innerText = `Total de cursos: ${quantidadeCursos}`;
}

// Chama a função ao carregar a página
window.onload = contarCursos;

