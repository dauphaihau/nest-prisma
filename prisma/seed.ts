// prisma/seed.ts

// import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
// const prisma = new PrismaClient();

// async function main() {
//   const user = await prisma.user.create({
//     data: {
//       name: 'Han',
//       email: 'han@prisma.io',
//       posts: {
//         create: [
//           {
//             title: 'My first day at Prisma',
//           },
//           {
//             title: 'How to connect to a SQLite database',
//           },
//         ],
//       },
//     },
//   });
//   return user;
// }

// execute the main function
// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     // close Prisma Client at the end
//     await prisma.$disconnect();
//   });
