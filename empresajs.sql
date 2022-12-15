-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2022 at 05:46 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `empresajs`
--

-- --------------------------------------------------------

--
-- Table structure for table `admon`
--

CREATE TABLE `admon` (
  `id_admin` int(11) NOT NULL,
  `admin_name` varchar(20) NOT NULL,
  `admin_mail` varchar(50) NOT NULL,
  `admin_password` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admon`
--

INSERT INTO `admon` (`id_admin`, `admin_name`, `admin_mail`, `admin_password`) VALUES
(1, 'Juan', 'juan@gmail.com', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `empleados`
--

CREATE TABLE `empleados` (
  `empleado_id` int(11) NOT NULL,
  `correo_electronico` varchar(20) NOT NULL,
  `empleado_nombre` varchar(50) NOT NULL,
  `empleado_apellido` varchar(50) NOT NULL,
  `empleado_telefono` varchar(15) NOT NULL,
  `empleado_direccion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `empleados`
--

INSERT INTO `empleados` (`empleado_id`, `correo_electronico`, `empleado_nombre`, `empleado_apellido`, `empleado_telefono`, `empleado_direccion`) VALUES
(1, 'benito@gmail.com', 'Benito', 'Camelo Juarez', '1234567890', 'Fray Junipero #12'),
(2, 'Juan@gmail.com', 'Juan', 'Juarez Julion', '1234567890', 'Fray Junipero #23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admon`
--
ALTER TABLE `admon`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`empleado_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admon`
--
ALTER TABLE `admon`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `empleados`
--
ALTER TABLE `empleados`
  MODIFY `empleado_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
