-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Hamburguer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" TEXT NOT NULL,
    "ingredientes" TEXT NOT NULL
);
INSERT INTO "new_Hamburguer" ("descricao", "id", "ingredientes", "nome", "preco") SELECT "descricao", "id", "ingredientes", "nome", "preco" FROM "Hamburguer";
DROP TABLE "Hamburguer";
ALTER TABLE "new_Hamburguer" RENAME TO "Hamburguer";
CREATE UNIQUE INDEX "Hamburguer_id_key" ON "Hamburguer"("id");
CREATE UNIQUE INDEX "Hamburguer_nome_key" ON "Hamburguer"("nome");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
