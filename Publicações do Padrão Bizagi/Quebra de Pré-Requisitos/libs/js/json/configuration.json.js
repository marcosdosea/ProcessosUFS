Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Process Modeler","modelName":"Quebra de Pré-Requisitos","publishDate":"24/01/2020 02:42:46","pages":[{"id":"125e832a-3d17-423e-bb57-0111de79cfe2","name":"Quebra de Pré-Requisitos","version":"1.0","author":"Emeson","image":"files\\diagrams\\Quebra_de_Pre_Requisitos.png","isSubprocessPage":false,"elements":[{"id":"d7220e4f-3f43-4527-ae42-fc518daa5a07","name":"Quebra de Pré-Requisitos","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":735.999939,"width":50.0,"shape":"rect"},"elementType":"Participant","pageElements":[{"id":"e9d7452c-cdda-4aba-b6c0-73e78aa169ef","name":"Início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":142.0,"y":55.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"f385f1ff-2a86-4a48-9114-9d9e4ccfe905","name":"Solicitar quebra de pré-requisitos de disciplina","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":202.0,"y":42.5}],"radius":0.0,"height":55.0,"width":215.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9bdb3234-523b-477e-a547-0ea90fbe3167","name":"Verificrar se o discente atende as condições para a aprovação do pré-requisito (RESOLUÇÃO n 21/2013/CONEPE)","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":171.5,"y":160.3}],"radius":0.0,"height":120.0,"width":276.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8e7d1a21-d506-4f91-839b-2b4880e5a9bf","name":"Atende?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":490.0,"y":200.3}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"7d2a77e7-4087-44d8-b926-1e795458f5aa","name":"Emitir parecer favorável a quebra de pré-requisito","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":597.0,"y":245.300018}],"radius":0.0,"height":52.0,"width":223.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"009773a1-ad5f-4189-a10f-527fe0be1164","name":"Encaminhar o discente para o  SECON para abrir processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":858.0,"y":192.3}],"radius":0.0,"height":50.0,"width":253.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"56686d61-f50e-4095-835a-78365bab5b1e","name":"Abrir processo de quebra de pré-requisito do discente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1032.0,"y":345.800018}],"radius":0.0,"height":49.0,"width":259.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"598d0a2b-2b82-4d05-81d0-31834e6ccfb3","name":"Encaminhar processo para o colegiado do curso","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1328.5,"y":344.300018}],"radius":0.0,"height":52.0,"width":247.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"365335ca-5a15-47e5-91bf-96aa5a4b21b7","name":"Analisar solicitação de quebra de pré-requisito do discente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1313.0,"y":501.500061}],"radius":0.0,"height":55.0,"width":278.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6d4d2a1b-c15b-4306-80ed-bc67bcef0df6","name":"Aprovado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1645.0,"y":509.000061}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"db47cf66-5edd-41b5-a32a-728c57e757df","name":"Emitir parecer favorável a quebra de pré-requisitos ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1744.0,"y":536.000061}],"radius":0.0,"height":56.0,"width":240.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f7558e54-6d8e-448e-8b9d-121c8e87291a","name":"Encaminhar o processo para o DICAC/DAA","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2006.0,"y":487.0}],"radius":0.0,"height":55.0,"width":232.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"280614c2-3d42-455d-8932-fec41d635230","name":"Apreciar e efetivar a quebra do pré-requisitoda disciplina para o discente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2111.0,"y":646.500061}],"radius":0.0,"height":69.0,"width":280.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"276d9cdd-8746-443e-ad53-0a6b2d598ba1","name":"Matricular Discente na disciplina objeto da solicitação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2407.0,"y":654.000061}],"radius":0.0,"height":54.0,"width":273.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"09b2dbef-2035-45b9-9175-8451fa3ed92d","name":"Fim","elementImage":"files\\bpmnElements\\TerminateEnd.png","imageBounds":{"points":[{"x":2705.0,"y":666.000061}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TerminateEnd","properties":[]},{"id":"4502bc29-8803-4c04-a25e-760998a49c0a","name":"Emitir parecer desfavorável a quebra de pré-requisitos ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1738.0,"y":435.000061}],"radius":0.0,"height":50.0,"width":248.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"156e2359-db57-46d7-9bbf-5f12accf7c00","name":"Emitir parecer desfavorável a quebra de pré-requisito","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":594.0,"y":124.3}],"radius":0.0,"height":57.0,"width":239.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ef081c37-c4c1-45d0-881b-e2a4f498ee21","name":"Discente","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":96.3,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"69fd035d-ef0f-41aa-b6c2-025573f3ac7a","name":"SEAP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":116.3}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"55a896e1-e415-490d-874c-1565ed5a9eb5","name":"SECON","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":316.3}],"radius":0.0,"height":96.7,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6e2c61ef-821c-4aea-afcc-36b300a025f5","name":"Colegiado do Curso","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":413.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"5c18ace9-82aa-4ba0-a0e2-5297b4fba1de","name":"DICAC/DAA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":613.0}],"radius":0.0,"height":142.999939,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Proceso","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Executor","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:"},"searchMap":[{"containerId":"125e832a-3d17-423e-bb57-0111de79cfe2","containerName":"Quebra de Pré-Requisitos","isSubprocess":false,"elements":[{"id":"d7220e4f-3f43-4527-ae42-fc518daa5a07","value":"Quebra de Pré-Requisitos"},{"id":"ef081c37-c4c1-45d0-881b-e2a4f498ee21","value":"Discente"},{"id":"69fd035d-ef0f-41aa-b6c2-025573f3ac7a","value":"SEAP"},{"id":"55a896e1-e415-490d-874c-1565ed5a9eb5","value":"SECON"},{"id":"6e2c61ef-821c-4aea-afcc-36b300a025f5","value":"Colegiado do Curso"},{"id":"5c18ace9-82aa-4ba0-a0e2-5297b4fba1de","value":"DICAC/DAA"},{"id":"e9d7452c-cdda-4aba-b6c0-73e78aa169ef","value":"Início"},{"id":"f385f1ff-2a86-4a48-9114-9d9e4ccfe905","value":"Solicitar quebra de pré-requisitos de disciplina"},{"id":"9bdb3234-523b-477e-a547-0ea90fbe3167","value":"Verificrar se o discente atende as condições para a aprovação do pré-requisito (RESOLUÇÃO n 21/2013/CONEPE)"},{"id":"8e7d1a21-d506-4f91-839b-2b4880e5a9bf","value":"Atende?"},{"id":"7d2a77e7-4087-44d8-b926-1e795458f5aa","value":"Emitir parecer favorável a quebra de pré-requisito"},{"id":"56686d61-f50e-4095-835a-78365bab5b1e","value":"Abrir processo de quebra de pré-requisito do discente"},{"id":"365335ca-5a15-47e5-91bf-96aa5a4b21b7","value":"Analisar solicitação de quebra de pré-requisito do discente"},{"id":"6d4d2a1b-c15b-4306-80ed-bc67bcef0df6","value":"Aprovado?"},{"id":"280614c2-3d42-455d-8932-fec41d635230","value":"Apreciar e efetivar a quebra do pré-requisitoda disciplina para o discente"},{"id":"276d9cdd-8746-443e-ad53-0a6b2d598ba1","value":"Matricular Discente na disciplina objeto da solicitação"},{"id":"598d0a2b-2b82-4d05-81d0-31834e6ccfb3","value":"Encaminhar processo para o colegiado do curso"},{"id":"db47cf66-5edd-41b5-a32a-728c57e757df","value":"Emitir parecer favorável a quebra de pré-requisitos "},{"id":"156e2359-db57-46d7-9bbf-5f12accf7c00","value":"Emitir parecer desfavorável a quebra de pré-requisito"},{"id":"009773a1-ad5f-4189-a10f-527fe0be1164","value":"Encaminhar o discente para o  SECON para abrir processo"},{"id":"4502bc29-8803-4c04-a25e-760998a49c0a","value":"Emitir parecer desfavorável a quebra de pré-requisitos "},{"id":"f7558e54-6d8e-448e-8b9d-121c8e87291a","value":"Encaminhar o processo para o DICAC/DAA"},{"id":"09b2dbef-2035-45b9-9175-8451fa3ed92d","value":"Fim"}]}]}