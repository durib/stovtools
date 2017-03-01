CREATE TABLE "assetCheck" ("characterID" INTEGER NOT NULL, "typeID" INTEGER NOT NULL , "quantity" INTEGER NOT NULL );
CREATE UNIQUE INDEX assetCheckIndex ON assetCheck("characterID", "typeID");