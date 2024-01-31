<script setup lang="ts"></script>

<template>
  <header class="header">
    <router-link active-class="active" class="link" to="/">Текущие задачи</router-link>
    <router-link active-class="active" class="link" to="/editor">Редактор задач</router-link>
  </header>
</template>

<style scoped>
.header {
  border-radius: 20px;
  box-shadow: 5px 5px 5px #0000004b;
  background-color: #f8fae5;

  display: grid;
  grid-template-columns: 1fr 1fr;

  font-size: 1.6rem;
}
.link {
  position: relative;
  width: 100%;
  padding: 10px 0px;
  border-bottom: 2px solid #f8fae5;

  display: block;

  text-align: center;
  color: #8d7b68;
}
.link:hover {
  border-bottom: 5px solid #d8c5ad;
}
.link.active:hover {
  border-bottom: 5px solid #b19470;
}
.link:first-child {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.link:nth-child(2) {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
.active {
  color: #b19470;
  border-bottom: 5px solid #b19470;
}
@media (max-width: 576px) {
  .header {
    font-size: 1.4rem;
  }
}
@media (max-width: 450px) {
  .header {
    font-size: 1.25rem;
  }
}
</style>
