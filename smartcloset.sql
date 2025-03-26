-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26-Mar-2025 às 15:44
-- Versão do servidor: 10.4.32-MariaDB
-- versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `smartcloset`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `roupas`
--

CREATE TABLE `roupas` (
  `Id_roupa` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `marca` varchar(100) DEFAULT NULL,
  `tamanho` varchar(10) DEFAULT NULL,
  `cor` varchar(50) DEFAULT NULL,
  `estado` varchar(50) DEFAULT NULL,
  `Id_conta` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `roupas`
--

INSERT INTO `roupas` (`Id_roupa`, `nome`, `marca`, `tamanho`, `cor`, `estado`, `Id_conta`) VALUES
(2, 'Sweat', 'Pull and Bear', 'M', 'Branca', 'Por lavar', 3),
(3, 'T-shirt', 'Berskha', 'S', 'Azul', 'Pronta', 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

CREATE TABLE `user` (
  `Id_conta` int(11) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Username` varchar(50) NOT NULL,
  `Password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`Id_conta`, `Email`, `Username`, `Password`) VALUES
(3, 'teste1@gmail.com', 'Teste1', '$2b$10$e92098/7BzkfuuxrYBqQ2O/MNOkNITvNBv8qw/hck2DN0C4buxb6O');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `roupas`
--
ALTER TABLE `roupas`
  ADD PRIMARY KEY (`Id_roupa`),
  ADD KEY `Id_conta` (`Id_conta`);

--
-- Índices para tabela `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`Id_conta`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `roupas`
--
ALTER TABLE `roupas`
  MODIFY `Id_roupa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `user`
--
ALTER TABLE `user`
  MODIFY `Id_conta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `roupas`
--
ALTER TABLE `roupas`
  ADD CONSTRAINT `roupas_ibfk_1` FOREIGN KEY (`Id_conta`) REFERENCES `user` (`Id_conta`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
