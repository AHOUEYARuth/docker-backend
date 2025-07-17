<script setup lang="ts"></script>

<template>
  <!--  <div class="dash">
    <div class="sideBar">
        <nav>
            <h2>TodoApp</h2>
            <ul>
               <li><a href="">Mes tâches</a></li>
               <li><a href="">Tâches complètées</a></li>
               <li><a href="">Tâches en attente</a></li>
            </ul>
        </nav>
    </div>
    <div>
        <header></header>
        <main><RouterView /></main>
    </div>
  </div> -->
  <header class="das_header">
    <div class="das_container">
      <div class="das_content">
        <div class="profil">
          <h3>TodoApp</h3>
          <div class="user_infos">
            <div class="userName">
              <h3>Detch Amra</h3>
              <!--  <a href="">rua@gmail.com</a> -->
            </div>
            <!-- <div class="account">
              <div class="userpicture">DA</div>
              <div class="dropdown">
                <div class="consult_profil">
                  <Image src="{User}" alt="" />
                  <p>Profil</p>
                </div>
                <div class="consult_profil">
                  <Image src="{Logout}" alt="" />
                  <p>Se déconnecter</p>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="dashboard_main">
    <aside class="sidebar">
      <ul>
        <li><a href="">Mes tâches</a></li>
        <li><a href="">Tâches complètées</a></li>
        <li><a href="">Tâches en attente</a></li>
      </ul>
    </aside>
    <div class="dashboard">
      <h1>Bienvenue dans votre tableau de bord</h1>
      <div class="articles">
        <p>Article disponible : 0</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: black;
}
:root {
  --marronFoncee: #6a4e23;
  --beigClaire: #d4c29f;
  --rougeBrique: #9e2a2f;
  --orangeChaud: #f4a300;
  --oliveVert: #6a6a2c;
  --blancCreme: #f8f8f2;
  --bleuProfond: #1e3a5f;
  --jaune: #ffd700;
  --beigeFoncée: #c8ad7f;
}
.das_header {
  width: 100%;
  background-color: #333;
}
.dash_section {
  width: 100%;
}
.das_container {
  max-width: 1268px;
  margin: 0 auto;
}
.das_content {
  width: 100%;
}
.profil {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /*  padding: 10px 20px; */
  /*  padding: 15px 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
}
.profil a {
  font-size: 20px;
  color: #fff;
}
.user_infos {
  /* width: 30%;
  padding-right: 15px; */
  display: flex;
  align-items: center;
  gap: 20px;
}
.userName {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.userName a {
  color: #fff;
}
h6 {
  color: #fff;
}
.userpicture {
  width: 45px;
  height: 45px;
  border-radius: 30px;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #fff;
  color: var(--marronFoncee);
  font-weight: 400;
}
.dropdown {
  width: 180px;
  height: 110px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  padding: 20px 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 60px;
  right: 0;
  opacity: 0;
  transition: opacity 0.5s ease;
  margin-right: 30px;
}
.active {
  opacity: 1;
  z-index: 10;
}
.consult_profil {
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
}
.consult_profil p {
  color: grey;
}
.user_active {
  width: 100%;
  display: flex;
  align-items: start;
  gap: 30px;
}
.option {
  width: 300px;
  height: 150px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.option button {
  padding: 10px 10px;
  background-color: #1e3a8a;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
}
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.25rem;
  padding: 1.5rem 0;
  width: calc(100% - 300px);
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
a {
  text-decoration: none;
}
.dashboard h1 {
  color: var(--oliveVert);
}
.modal_content {
  background-color: white;
  padding: 50px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.logout_btn {
  display: flex;
  align-items: center;
  gap: 20px;
}
.logout_btn button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.modal_content button:hover {
  background-color: #0056b3;
}
.message {
  text-align: center;
  color: green;
}
.dashboard_main {
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  align-items: start;
}
.dashboard_main .left_section {
  width: 20%;
  height: 100%;
  padding-top: 10px;
  background-color: rgb(236, 236, 236);
}
.dashboard_main .right_section {
  width: 80%;
  height: 100%;
  padding-top: 10px;
}
.sidebar {
  width: 20%;
  height: 100%;
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.sidebar a {
  display: block;
  text-decoration: none;
  color: #fff;
}
ul{
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 15px;
}
li{
    list-style: none;
}
/* .sidebar a:hover {
  color: #724d21fe;
} */
.dashboard {
  padding: 20px;
  background-color: #f2f2f2;
  width: 80%;
  height: 100%;
}
.dashboard h1 {
  color: #2c3e50;
  margin-bottom: 10px;
}
.articles {
  padding: 15px;
}
p{
    color: #333;
}
.firstarticle {
  color: #555;
  border-radius: 10px;
  background-color: #f8f9fa;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  display: flex;
}
.secondarticle {
  color: #555;
  border-radius: 10px;
  background-color: #f8f9fa;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  display: flex;
}
.prod {
  width: 100%;
}
.prod_content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.add_prod {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
}
.dash_bout {
  border: 1px solid var(--marronFoncee);
  padding: 5px 10px;
  border-radius: 5px;
}
.dash_bout:hover {
  background-color: var(--marronFoncee);
  color: #fff;
  transition: all 0.3s ease;
}
</style>
