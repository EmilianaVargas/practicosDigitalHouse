-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 01-08-2020 a las 20:40:11
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mercadoliebre`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `discount`, `image`, `category`) VALUES
(1, 'Cafetera Moulinex Dolce Gusto', 'Cafetera Dolce Gusto Lumio. La cafetera Dolce Gusto Lumio es de variedad automática que ha llegado con un diseño radical al que nos tenía acostumbrados Dolce Gusto.En este post te contamos todo lo que necesitas saber sobre ella, desde sus características técnicas hasta la calidad de las cápsulas o price.', 12000, 50, 'img-cafetera-moulinex.jpg', 'visited'),
(2, 'Macbook Pro 2022', 'Macbook Pro 2019 Mpxq2ll/a Intel Core i5 2.3 Ghz 8gb RAM 128gb SSD Pantalla 13.3\" Retina Apple Nueva Original. Importada de USA. Se entrega con la factura de compra para contar con la garantía del fabricante', 99999, 3, 'img-macbook-pro-2019.jpg', 'in-sale'),
(3, 'Samsung Galaxy S10', 'Experiencia visual excepcional. Mirá tus series y películas favoritas con la mejor definición.Tendrás colores brillantes y detalles precisos en todos tus contenidos.Disfrutá aún más del mejor entretenimiento gracias a su vasta pantalla y ángulos de visión amplios.', 72999, 25, 'img-samsung-galaxy-s10.jpg', 'in-sale'),
(4, 'Heladera no frost Whirlpool WRM45A', 'Disfrutá de la frescura de tus alimentos y almacenalos de manera práctica y cómoda en tu heladera Whirlpool, la protagonista de tu cocina. Su sistema no frost evita la generación de escarcha y te permitirá conservar el sabor y las propiedades nutritivas de los productos.A su vez, su freezer cuenta con una capacidad de 86 litros, que facilitará la distribución y el orden de tus congelados para que no te preocupes por la falta de espacio.', 47900, 20, 'img-heladera-whirpool.jpg', 'in-sale'),
(5, 'Nikon Reflex D3500 - Kit', 'Incluye la cámara D3500, el objetivo zoom AF-P DX NIKKOR 18-55mm y el superteleobjetivo zoom compacto AF-P DX NIKKOR 70-300mm. Ambos objetivos enfocan de forma rápida y silenciosa, lo que resulta ideal para grabar metraje de vídeo sin que se escuche apenas el ruido del accionamiento.', 53000, 20, 'img-camara-nikon.jpg', 'in-sale'),
(6, 'Aire Acondicionado 3200w Frio / Calor', 'AIRE SPLIT 3200W TACA-3200WCHSA/KC FC TCL. Capacidad frio 3200 Watts. Capacidad calor 3300 Watts. Potencia Electrica(W)frio 996. Potencia Electrica(W)calor 1028. Eficiencia energética calor C. Eficiencia energética frio A. Frigorias 2750 UNIDAD INTERIOR. Peso Bruto 10kg. Peso Neto 7 kg', 20999, 12, 'img-aire-acondicionado.jpg', 'in-sale'),
(7, 'Notebook Lenovo I3 Intel 8gb Ram', 'PROCESADOR / CHIPSET. CPU: Intel Core i3(8a generación) 8130U / 2.2 GHz. Velocidad turbo máxima: 3, 4 GHz. Numero de núcleos: Doble núcleo. Cache: 4 MB. Arquitectura de 64 bit: ss. MEMORIA CACHÉ. Tamaño instalada: 4 MB. ALMACENAMIENTO. Interfaz Serial ATA - 600', 36700, 5, 'img-laptop-lenovo.jpg', 'in-sale'),
(8, 'Apple iPhone 11 Pro Dual SIM 256 GB', '¡El nuevo smartphone que lo tiene todo! Con este lanzamiento, Apple ha superado todos sus récords. Su diseño se destaca por sus líneas finas y distinguidas a partir de una sola hoja de vidrio resistente, combinada con aluminio de excelente calidad.', 148000, 2, 'img-iphone-11.jpg', 'in-sale'),
(9, 'Teclado Apple Magic Inalámbrico', 'El teclado mágico combina un diseño elegante con una batería recargable incorporada y funciones clave mejoradas. Con un mecanismo de tijera estable debajo de cada tecla, así como un recorrido de teclas optimizado y un perfil bajo, el Teclado Mágico ofrece una experiencia de escritura notablemente cómoda y precisa.', 11399, 0, 'img-apple-magic-keyboard.jpg', 'visited'),
(10, 'Mouse Inalámbrico Logitech M280', 'Uso más cómodo para la mano derecha gracias a la forma contorneada con recubrimiento de goma blanda. Duración de las pilas hasta 18 meses, gracias al diseño para ahorrar energía.El M280 entra automáticamente en estado de suspensión cuando no se está usando.', 1200, 10, 'img-mouse-logitech.jpg', 'visited'),
(11, 'Parlante Inalámbrico Bose Soundtouch 10', 'Parlante Inalámbrico Bose Soundtouch 10. SoundTouch®.La manera más sencilla de reproducir música en todo su hogar de forma inalámbrica. Características. » Marca: Bose. » Modelo: SoundTouch. » Color: Negro', 29990, 9, 'img-parlante-bose.jpg', 'visited'),
(12, 'Home Theatre Sony Bdv-e4100', 'El sonido Surround de 5.1 canales y 1000 W proporciona un audio de verdadero impacto en los efectos especiales de películas y efectos de sonido de música y deportes. Con la tecnología Near Field Communication(NFC) podés disfrutar de Sonido One- Touch para reproducir música de forma instantánea', 32990, 0, 'img-home-theater-sony.jpg', 'visited'),
(13, 'Smart TV Samsung 4K 50', 'Con el Smart TV Samsung UN50MU6100, viví una nueva experiencia visual con la resolución 4K, que te presentará imágenes con gran detalle y de alta calidad. Ahora todo lo que veas cobrará vida con brillo y colores más reales. Gracias a su tamaño de 50\", podrás transformar tu espacio en una sala de cine y transportarte a donde quieras.', 34990, 0, 'img-tv-samsung-smart.jpg', 'visited'),
(14, 'Sony S6700 Reproductor De Blu-ray ', 'Disfruta de tus películas favoritas con hasta cuatro veces más detalles que Full HD, gracias a la conversión de señales 4K. Cuando se conecta a un televisor compatible,un procesador de video avanzado convierte el video estándar en una señal cercana a la resolución 4K (3840 x 2160). Con ocho millones de píxeles, obtendrás imágenes más nítidas y detalladas, y la mayor calidad de la image te permite sentarte más cerca de la pantalla para que te sientas como en el cine.', 10999, 5, 'img-sony-blueray.jpg', 'visited'),
(15, 'Bicicleta Mountain Bike Fierce Rodado 29', 'Bicicleta Mountain Bike Fierce Rodado 29 21 velocidades. Tipo: Mountain Bike. Rodado: 29. Material Cuadro: Aluminio. Talle: 18. Suspensión: Delantera. Velocidades: 21 - Shimano. Sistema de Freno: Disco Mecánico. Llantas: Doble pared.', 15978, 27, 'img-bicicleta-fierce.jpg', 'in-sale'),
(16, 'Sony Srs-xb12 Parlante Bluetooth Portátil', 'Deja que la música dance cobre vida con EXTRA BASS™ Anima el ambiente con EXTRA BASS™1. Un radiador pasivo trabaja con el parlante monoaural para potenciar los tonos bajos y mejorar los graves, a pesar del tamaño compacto. ', 4699, 5, 'img-parlante-sony.jpg', 'in-sale');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
