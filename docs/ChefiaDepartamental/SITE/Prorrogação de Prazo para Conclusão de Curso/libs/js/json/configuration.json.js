Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Process Modeler","modelName":"Prorrogação de Prazo para Conclusão de Curso","publishDate":"29/02/2020 13:47:17","pages":[{"id":"337c3174-d2cb-4087-a536-f778003740e3","name":"Prorrogação de Prazo para Conclusão de Curso","version":"1.0","author":"paulo","image":"files\\diagrams\\Prorrogacao_de_Prazo_para_Conclusao_de_Curso.png","isSubprocessPage":false,"elements":[{"id":"c54711da-6ade-4e47-8633-90f718d66468","name":"Prorrogação de Prazo para Conclusão de Curso","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":674.0,"width":50.0,"shape":"rect"},"elementType":"Participant","pageElements":[{"id":"e37b54b6-d7d9-4875-a0f9-911203d26bd6","name":"Início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":131.0,"y":71.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"b2e1e495-4d73-48ef-839d-64d065a5421b","name":"Analisar a solicitação de prorrogação de prazo de conclusão de curso do aluno","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":194.5,"y":463.0}],"radius":0.0,"height":72.0,"width":300.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"99eada22-c24e-4224-8223-e3db1ab86be7","name":"Informar sobre a documentação necessária  para prorrogação de prazo de conclusão de curso","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":194.5,"y":268.0}],"radius":0.0,"height":69.0,"width":300.0,"shape":"rect"},"elementType":"AbstractTask","properties":[{"name":"pre-requisitos","value":"files\\attachments\\Edital_35_2018_PROGRAD.pdf","type":"url","urlText":"Edital_35-2018-PROGRAD.pdf"}],"presentationAction":{"name":"pre-requisitos","value":"files\\attachments\\Edital_35_2018_PROGRAD.pdf","type":"url","urlText":"Edital_35-2018-PROGRAD.pdf"}},{"id":"14e61a89-41f2-4144-8d2c-d737b9a56039","name":"Solicitar  prorrogação de prazo  para  conclusão de curso","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":210.999969,"y":166.0}],"radius":0.0,"height":54.0,"width":268.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"351c0344-d4bf-4982-a266-f25c28f40fc2","name":"Ampliar o  prazo de conclusão do aluno ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":728.0,"y":607.0}],"radius":0.0,"height":48.0,"width":228.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f4ee7f15-62f8-41d5-8b71-3206caa981b6","name":"Publicar edital de prazo de conclusão de curso dos alunos que estão no limite máximo de conclusão ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":194.999969,"y":41.0}],"radius":0.0,"height":90.0,"width":300.0,"shape":"rect"},"elementType":"AbstractTask","properties":[{"name":"pre-requisitos","value":"files\\attachments\\prejubilaveis.pdf","type":"url","urlText":"prejubilaveis.pdf"}],"presentationAction":{"name":"pre-requisitos","value":"files\\attachments\\prejubilaveis.pdf","type":"url","urlText":"prejubilaveis.pdf"}},{"id":"2efa9413-4245-4728-ab2c-3324f3486eae","name":"Abrir o processo de prorrogação de prazo  do aluno","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":207.0,"y":376.0}],"radius":0.0,"height":50.0,"width":275.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7d43a931-b149-41e7-9f3e-c0d98405b134","name":"Prorrogação de prazo foi aprovado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":591.0,"y":479.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"0df42d50-fd2c-4f28-a758-8fc68e8151e5","name":"Prorrogar até o  limite máximo  de períodos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":732.5,"y":472.0}],"radius":0.0,"height":54.0,"width":219.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"55d2d16e-03a6-4395-bbc6-8a6738720af4","name":"Fim","elementImage":"files\\bpmnElements\\TerminateEnd.png","imageBounds":{"points":[{"x":1029.0,"y":616.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TerminateEnd","properties":[]},{"id":"7e4b8884-8009-4731-af9d-6df60f04762e","name":"Receber ciência da negação da prorrogação do prazo de conclusão de curso.","elementImage":"files\\bpmnElements\\MessageEnd.png","imageBounds":{"points":[{"x":596.0,"y":173.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageEnd","properties":[]},{"id":"3a8fc1df-5db2-4f35-b917-bace44daa0dc","name":"PROGRAD","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":123.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"2dd1bd92-ffe8-4560-943c-927494a4a8ef","name":"Aluno","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":143.0}],"radius":0.0,"height":105.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"bc602650-94fd-4862-b398-db88272a79e7","name":"SEAP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":248.0}],"radius":0.0,"height":105.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"bfcd9f76-4f3d-465a-bf25-c5629738c97e","name":"SECON","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":353.0}],"radius":0.0,"height":92.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"45776169-5303-4899-9827-4e3fe7eccfca","name":"Colegiado do curso","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":445.0}],"radius":0.0,"height":142.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"de4923a2-434c-438b-bf30-0388a93e20b9","name":"DAA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":587.0}],"radius":0.0,"height":107.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Proceso","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Executor","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:"},"searchMap":[{"containerId":"337c3174-d2cb-4087-a536-f778003740e3","containerName":"Prorrogação de Prazo para Conclusão de Curso","isSubprocess":false,"elements":[{"id":"c54711da-6ade-4e47-8633-90f718d66468","value":"Prorrogação de Prazo para Conclusão de Curso"},{"id":"3a8fc1df-5db2-4f35-b917-bace44daa0dc","value":"PROGRAD"},{"id":"2dd1bd92-ffe8-4560-943c-927494a4a8ef","value":"Aluno"},{"id":"bc602650-94fd-4862-b398-db88272a79e7","value":"SEAP"},{"id":"bfcd9f76-4f3d-465a-bf25-c5629738c97e","value":"SECON"},{"id":"45776169-5303-4899-9827-4e3fe7eccfca","value":"Colegiado do curso"},{"id":"de4923a2-434c-438b-bf30-0388a93e20b9","value":"DAA"},{"id":"e37b54b6-d7d9-4875-a0f9-911203d26bd6","value":"Início"},{"id":"b2e1e495-4d73-48ef-839d-64d065a5421b","value":"Analisar a solicitação de prorrogação de prazo de conclusão de curso do aluno"},{"id":"99eada22-c24e-4224-8223-e3db1ab86be7","value":"Informar sobre a documentação necessária  para prorrogação de prazo de conclusão de curso"},{"id":"14e61a89-41f2-4144-8d2c-d737b9a56039","value":"Solicitar  prorrogação de prazo  para  conclusão de curso"},{"id":"351c0344-d4bf-4982-a266-f25c28f40fc2","value":"Ampliar o  prazo de conclusão do aluno "},{"id":"f4ee7f15-62f8-41d5-8b71-3206caa981b6","value":"Publicar edital de prazo de conclusão de curso dos alunos que estão no limite máximo de conclusão "},{"id":"2efa9413-4245-4728-ab2c-3324f3486eae","value":"Abrir o processo de prorrogação de prazo  do aluno"},{"id":"7d43a931-b149-41e7-9f3e-c0d98405b134","value":"Prorrogação de prazo foi aprovado?"},{"id":"0df42d50-fd2c-4f28-a758-8fc68e8151e5","value":"Prorrogar até o  limite máximo  de períodos"},{"id":"55d2d16e-03a6-4395-bbc6-8a6738720af4","value":"Fim"},{"id":"7e4b8884-8009-4731-af9d-6df60f04762e","value":"Receber ciência da negação da prorrogação do prazo de conclusão de curso."}]}]}