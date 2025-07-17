<!-- lancer le projet avec docker -->
docker compose up --build
<!-- Lien du déploiement vercel -->

https://docker-frontend-amber.vercel.app/

<!-- Détails des routes backend (routes)-->
- création de tâches : router.post("/", auth, taskController.createTask);
- récupération de tâches : router.get('/', auth, taskController.getAllTask);
- modification de tâches : router.put('/:id', auth, taskController.updateTask);
- suppression de tâches : router.delete('/:id', auth, taskController.deleteTask);
- Nombre total de taches : router.get("/stats/", auth, taskController.getTotalNumberTasks);
- Nombre de tâche complètées : router.get("/stats/completed", auth, taskController.getTaskCompletedNumber);
- Nombre de tâches non terminées : router.get("/stats/notEnd", auth, taskController.getTaskNotendNumber);