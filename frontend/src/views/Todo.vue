<script setup lang="ts"></script>

<template>
  <section>
    <div class="container">
      <div class="content">
        <h1>Ma liste de tâches</h1>
        <div class="actions">
          <div class="add">
            <input type="text" placeholder="Ajouter une tâche" />
            <button type="button" class="a">Ajouter</button>
          </div>
          <div class="filter">
            <input type="text" placeholder="rechercher une tâche" />
            <button type="button">rechercher</button>
          </div>
        </div>
        <div class="todo-list">
          <ul>
            <li>
              <input type="checkbox" />
              <span>Ma première tâche</span>
              <button type="button">Supprimer</button>
            </li>
            <li>
              <input type="checkbox" />
              <span>Ma deuxième tâche</span>
              <button type="button">Supprimer</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  padding: 30px 0;
}
.container {
  width: 1044px;
  margin: 0 auto;
}
.content {
  width: 100%;
  color: #693f18;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
.actions{
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.add, .filter {
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #693f18;
  border-radius: 2px;
}
input{
border: none;
outline: none;
padding: 10px 0;
padding-left: 5px;
/* border-top-left-radius: 5px;
border-bottom-left-radius: 5px; */
}
button{
border: none;
outline: none;
padding: 10px 5px;
background-color: #693f18;
color: #fff;
cursor: pointer;
/* border-top-right-radius: 5px;
border-bottom-right-radius: 5px; */
}
.a{
    padding: 10px 20px;
}
.todo-list{
    width: 100%;
    padding: 20px 0;
}
.todo-list ul{
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* background-color: #693f18; */
}
.todo-list ul li{
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
input[type="checkbox"] {
  border: 1px solid #693f18;
  background-color: #fff;
  padding: 5px;
}
</style>
