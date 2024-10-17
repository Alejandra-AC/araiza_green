<?php
include "conexion.php";

$idioma = isset($_GET['lang']) ? intval($_GET['lang']) : 1; // Usar 1 como valor predeterminado
$sql = "SELECT * FROM pregunta WHERE idioma = ?";
if ($stmt = $green->prepare($sql)) {
    $stmt->bind_param('i', $idioma);
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
$green->close();
