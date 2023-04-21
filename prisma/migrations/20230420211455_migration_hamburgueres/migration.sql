/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Hamburguer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Hamburguer_nome_key" ON "Hamburguer"("nome");
