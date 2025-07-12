function validarTarefa(titulo) {
  return titulo.trim() !== "";
}

// Teste unitário simples
if (validarTarefa("Nova tarefa")) {
  console.log("✅ Teste passou: título válido.");
} else {
  console.log("❌ Teste falhou: título deveria ser válido.");
}

if (!validarTarefa("   ")) {
  console.log("✅ Teste passou: título inválido detectado.");
} else {
  console.log("❌ Teste falhou: deveria ter detectado título vazio.");
}
