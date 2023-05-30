
<?php

echo "Skrypt database.php jest wykonywany.";

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "produkty";

// Tworzenie połączenia
$conn = new mysqli($servername, $username, $password, $dbname);

// Sprawdzenie połączenia
if ($conn->connect_error) {
    die("Błąd połączenia z bazą danych: " . $conn->connect_error);
}

// Wykonanie zapytania SQL i pobranie danych
$sql = "SELECT * FROM items";
$result = $conn->query($sql);

// Przygotowanie danych do zapisu w pliku JavaScript
$items = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $items[] = array(
            'nazwa' => $row["nazwa"],
            'opis' => $row["opis"],
            'cena' => $row["cena"],
            'kategoria' => $row["kategoria"],
            'image' => $row["image"]
        );
    }
}

// Zapis danych w pliku JavaScript
$data = json_encode($items);
$file = 'items.json';
file_put_contents($file, $data);
echo "Dane zapisane w pliku JavaScript.";


// Zamknięcie połączenia
$conn->close();
?>
