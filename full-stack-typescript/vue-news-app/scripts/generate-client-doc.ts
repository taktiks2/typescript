import { $ } from 'bun';

try {
  const res = await fetch('http://localhost:3000/doc');
  const result = await $`cat < ${res}`.json();
  await $`echo ${JSON.stringify(result, null, 2)} > ./services/doc.json`;
} catch (error) {
  console.error(error);
}
