function validarTarefa(titulo) {
  const texto = titulo.trim();

  // Verifica se não está vazio
  if (texto === "") return false;

  // Verifica tamanho mínimo (3) e máximo (100)
  if (texto.length < 3 || texto.length > 100) return false;

  // Verifica se contém apenas letras, números, espaços, hífens e underscores (sem caracteres especiais)
  const regex = /^[a-zA-Z0-9 _-]+$/;
  if (!regex.test(texto)) return false;

  return true;
}

// Função auxiliar para facilitar os testes
function testar(titulo, esperado) {
  const resultado = validarTarefa(titulo);
  if (resultado === esperado) {
    console.log(`✅ Teste passou: "${titulo}" => ${resultado}`);
  } else {
    console.log(`❌ Teste falhou: "${titulo}" => esperado ${esperado}, obteve ${resultado}`);
  }
}

// Testes unitários
testar("Nova tarefa", true);               // válido
testar("   tarefa com espaços   ", true); // válido, trim aplicado
testar("  ", false);                       // inválido, só espaços
testar("", false);                         // inválido, vazio
testar("ab", false);                       // inválido, menos que 3 chars
testar("a".repeat(101), false);            // inválido, mais que 100 chars
testar("Tarefa #1", false);                // inválido, caractere especial #
testar("Tarefa-1_completa", true);         // válido, hífen e underline permitidos
testar("Tarefa com emoji 😊", false);     // inválido, emoji não permitido
testar("Tarefa123", true);                 // válido, números permitidos
testar("Tarefa com espaços", true);       // válido
