# Sklep-Internetowy

# Nowe funkcjonalnosci
- Baza danych
- Dzialajacy kod PHP ktory pobiera wpisy z bazy i zapisuje je w pliku json
- Kod zostal uporzadkowany; zamiast miec ten sam kod na kazdej podstronie, to wszystkie stale elementy (typu naglowek, stopka) zostaly zapisane w folderze js, kazda w przeznaczonym pliku
- W bazie danych zostala dodana nowa kategoria przechowujaca odnosniki do zdjec - sa one uzywane jako miniaturki przedmiotow
- Na podstronie products mozna juz obejrzec wszystkie przedmioty
- Na podstronie products zostal dodany przycisk sortujacy produkty alfabetycznie
- Zostala rowniez dodana opcja filtrowania kategorii produktow (kategorie sa przypisane do produktow losowo, kazdy produkt jest w dokladnie jednej kategorii)
- Drobne zmiany dla malych ekranow; zmiejszenie roznych grafik

# Napotkane problemy
Konfigurowanie bazy danych, tworzenie bezblednego kodu w PHP
Rozwiazanie: Ctrl + Shift + I oraz sprawdzanie na biezaco w konsoli przegladarki czy pojawiaja sie jakies bledy;
dodatkowo: sprawdzanie error log apache daje duzo informacji na temat bledow przy laczeniu bazy danych

# Archiwum aktualizacji
20.05.2023 - Utworzenie bazy danych
21.05.2023 - Utworzenie pierwszej wersji kodu PHP
23.05.2023 - Uproszczenie html
28.05.2023 - Poprawienie i stworzenie ostatecznej wersji kodu PHP, wszelkie zastosowanie bazy danych, uzupelnienie CSS dla malych ekranow
