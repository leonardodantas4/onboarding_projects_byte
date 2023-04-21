/*
  Warnings:

  - You are about to alter the column `preco` on the `Hamburguer` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Hamburguer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "ingredientes" TEXT NOT NULL
);
INSERT INTO "new_Hamburguer" ("descricao", "id", "ingredientes", "nome", "preco") SELECT "descricao", "id", "ingredientes", "nome", "preco" FROM "Hamburguer";
DROP TABLE "Hamburguer";
ALTER TABLE "new_Hamburguer" RENAME TO "Hamburguer";
CREATE UNIQUE INDEX "Hamburguer_id_key" ON "Hamburguer"("id");
CREATE UNIQUE INDEX "Hamburguer_nome_key" ON "Hamburguer"("nome");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
