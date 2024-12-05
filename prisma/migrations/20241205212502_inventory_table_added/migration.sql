-- CreateTable
CREATE TABLE `Inventory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `entryId` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `genre` VARCHAR(191) NOT NULL,
    `publicationDate` VARCHAR(191) NOT NULL,
    `isbn` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
