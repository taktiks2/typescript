import { $ } from 'bun';

try {
  const res = await fetch('http://localhost:3000/doc');
  const result = await $`cat < ${res}`.json();
  await $`echo ${JSON.stringify(result, null, 2)} > ./custom_modules/open-api/doc.json`;
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error);
}
