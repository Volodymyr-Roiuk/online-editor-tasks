# isObjectsEquals

[опис задачі]
Напишіть функцію JS, яка приймає в себе два об'єкти, які можуть містити будь яку кількість рівнів вкладеності. Вам потрібно зробити глибоке порівняння цих об'єктів, та повернути з цієї функції true або false, в залежності від того чи об'єкти є однаковими.

[опційно: відео з поясненням задачі]

**Приклад:**
Приклад об'єктів: 
const obj1 = {
	title: 'some title',
	user: {
		name: 'Scamito',
		age: 21,
		mother: {
			name: 'Alexandra',
			age: 62
		}
	}
}

const obj2 = {
	title: 'some title',
	user: {
		name: 'Scamito',
		age: 21,
		mother: {
			name: 'Alexandra',
			age: 62
		}
	}
}

const obj3 = {
	user: {
		name: 'Derek',
		age: 29
	}
}

```js
// [код прикладу використання]
isObjectsEquals(obj1, obj2) // true

isisObjectsEquals(obj1, obj3) // false

isisObjectsEquals(obj2, obj3) // false
```

<details>
  <summary>Підказка</summary>

---

  [текст підказки]
	Самий простий спосіб зробити глибоке порівння об'єктів це привести їх до стрінги і порівняти дві стрічки.
</details>