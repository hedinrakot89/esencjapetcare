<?php
// ===== Esencja Pet Care — przyjmowanie zamówień na e-mail =====
// Адрес, куда приходят заказы. Поменяй при необходимости (одна строка):
const OWNER_EMAIL = "info@esencjapetcare.eu";
const FROM_EMAIL  = "zamowienia@esencjapetcare.eu";

header("Content-Type: application/json; charset=utf-8");
if ($_SERVER["REQUEST_METHOD"] !== "POST") { http_response_code(405); echo '{"ok":false}'; exit; }

$raw = file_get_contents("php://input");
$d = json_decode($raw, true);
if (!$d || empty($d["items"]) || empty($d["customer"]["email"])) { http_response_code(400); echo '{"ok":false}'; exit; }

$clean = fn($s) => trim(filter_var((string)$s, FILTER_SANITIZE_FULL_SPECIAL_CHARS));
$c = $d["customer"];
$email = filter_var($c["email"] ?? "", FILTER_VALIDATE_EMAIL);
if (!$email) { http_response_code(400); echo '{"ok":false}'; exit; }

$order = $clean($d["order"] ?? ("EPC-" . rand(10000, 99999)));
$lines = "";
foreach ($d["items"] as $it) {
  $lines .= sprintf("• %s — %d szt. × %.2f zł = %.2f zł\n",
    $clean($it["name"] ?? "?"), (int)($it["qty"] ?? 1),
    (float)($it["price"] ?? 0), (float)($it["sum"] ?? 0));
}
$ship = ["inpost" => "Paczkomat InPost", "kurier" => "Kurier DPD"][$c["ship"] ?? ""] ?? $clean($c["ship"] ?? "—");
$pay  = ["blik" => "BLIK", "przelewy24" => "Przelewy24 / karta", "pobranie" => "Za pobraniem"][$c["pay"] ?? ""] ?? $clean($c["pay"] ?? "—");

$body = "NOWE ZAMÓWIENIE $order\n"
      . "==============================\n\n"
      . "PRODUKTY:\n$lines\n"
      . sprintf("Wartość produktów: %.2f zł\nDostawa: %.2f zł\nRAZEM: %.2f zł\n\n",
          (float)($d["subtotal"] ?? 0), (float)($d["shipping"] ?? 0), (float)($d["total"] ?? 0))
      . "KLIENT:\n"
      . "Imię i nazwisko: " . $clean($c["name"] ?? "") . "\n"
      . "E-mail: $email\nTelefon: " . $clean($c["phone"] ?? "") . "\n"
      . "Adres: " . $clean($c["street"] ?? "") . ", " . $clean($c["zip"] ?? "") . " " . $clean($c["city"] ?? "") . "\n\n"
      . "Dostawa: $ship\nPłatność: $pay\n"
      . "Uwagi: " . $clean($c["notes"] ?? "—") . "\n\n"
      . "Data: " . date("Y-m-d H:i:s") . "\n";

$headers = "From: Esencja Pet Care <" . FROM_EMAIL . ">\r\n"
         . "Reply-To: $email\r\n"
         . "Content-Type: text/plain; charset=utf-8\r\n";

$ok = mail(OWNER_EMAIL, "Nowe zamowienie $order - " . sprintf("%.2f", (float)($d["total"] ?? 0)) . " zl", $body, $headers);

// potwierdzenie dla klienta
$confirm = "Dziękujemy za zamówienie $order w Esencja Pet Care! 🐾\n\n"
         . "Twoje produkty:\n$lines\n"
         . sprintf("RAZEM (z dostawą): %.2f zł\n\n", (float)($d["total"] ?? 0))
         . "Skontaktujemy się z Tobą w sprawie płatności i wysyłki.\n\n"
         . "Esencja Pet Care\ninfo@esencjapetcare.eu | +48 728 005 821\nesencjapetcare.eu";
@mail($email, "Potwierdzenie zamowienia $order - Esencja Pet Care",
      $confirm, "From: Esencja Pet Care <" . FROM_EMAIL . ">\r\nContent-Type: text/plain; charset=utf-8\r\n");

echo json_encode(["ok" => (bool)$ok, "order" => $order]);
