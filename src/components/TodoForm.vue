<script setup lang="ts">
import { ref, type Ref } from 'vue'
import type { ITodo } from '@/types/todosTypes'

const daysNames = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

const { todo } = defineProps<{
  todo?: ITodo
}>()

const inputText = ref(todo ? todo.content : '')

const days: Ref<number[]> = ref(todo ? todo.days : [])

const dates: Ref<number[]> = ref(todo ? todo.dates : [])

const emit = defineEmits(['create', 'update'])

const handleCreate = () => {
  emit(todo ? 'update' : 'create', {
    inputText: inputText.value,
    days: days.value,
    dates: dates.value
  })
}
</script>

<template>
  <form class="form" @submit.prevent="handleCreate">
    <InputUI class="input" v-model="inputText" />
    <div class="row">
      <div class="name">Дни недели</div>
      <div class="days">
        <div class="day" v-for="n in 7" :key="n">
          <label>{{ daysNames[n - 1] }}</label>
          <input class="checkbox" type="checkbox" v-model="days" :value="n === 7 ? 0 : n" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="name">Дни месяца</div>
      <select class="select" multiple size="5" v-model.number="dates">
        <option class="option" v-for="n in 31" :key="n">{{ n }}</option>
      </select>
    </div>
    <ButtonUI class="btn">{{ todo ? 'Сохранить' : 'Создать' }}</ButtonUI>
  </form>
</template>

<style scoped>
.form {
  width: 820px;
  padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 25px;
}
.select {
  height: 28px;
  outline: auto;
  outline-color: var(--border-color);
  overflow-y: hidden;

  user-select: none;
  text-align: center;
}
.select:focus {
  outline-color: var(--border-color);
}
.row {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
}
.checkbox {
  height: 18px;
  width: 18px;

  filter: hue-rotate(220deg);
  cursor: pointer;
}
.name {
  text-decoration: underline;
  text-decoration-color: var(--border-color);
  text-underline-offset: 4px;
  font-weight: 500;
}
.option {
  padding: 4px 3.4px;

  display: inline-block;

  filter: hue-rotate(220deg);
}
.days {
  display: flex;
  gap: 10px;

  font-size: 1.1rem;
}
.day {
  display: flex;
  align-items: center;
  gap: 5px;
}
.input {
  width: 100%;
}
.btn {
  margin: 0 auto;
}
</style>
