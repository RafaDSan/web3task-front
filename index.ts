import { execute, authorizedPersonnelsQueryDocument } from "./.graphclient";

async function main() {
  const { data } = await execute(authorizedPersonnelsQueryDocument, {});

  console.log(data);
}

main().catch(console.error);
