<?php
include "conexion.php";

// Numero de socio
$socio = $_POST['socio'];

$sql = "SELECT CONCAT(nombre, ' ', apellido, ' ', apellido2) as nombre, email FROM `club` WHERE id = ?";

if ($stmt = $diamante->prepare($sql)) {
    $stmt->bind_param('i', $socio);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        $data = $result->fetch_assoc();
    } else {
        $data = [];
    }
    header('Content-Type: application/json');
    echo json_encode($data);
    $stmt->close();
} else {
    echo json_encode(['error' => 'Error en la preparación de la consulta']);
}
$diamante->close();

