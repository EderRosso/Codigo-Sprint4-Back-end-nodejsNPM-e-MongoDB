// Slide 11 - O que existe no Node (e o que não existe)
console.log(process.version);    // ✅ EXISTE NO NODE: Mostra a versão do Node instalada no servidor (ex: v24.11.1)
console.log(process.platform);   // ✅ EXISTE NO NODE: Mostra o sistema operacional onde está rodando (ex: 'win32')
console.log(document);           // ❌ NÃO EXISTE NO NODE: Dá erro (ReferenceError) pois no servidor não há página HTML (DOM)!
