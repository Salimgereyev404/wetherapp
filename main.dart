import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: CryptX(),
    );
  }
}

// Бұл – сенің CryptX файлың
class CryptX extends StatelessWidget {
  const CryptX({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      backgroundColor: Colors.black,
      body: SafeArea(
        child: Column(
          children: [
            Align(
              alignment: Alignment.center,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'Crypt',
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 64,
                      color: Colors.white,
                    ),
                  ),
                  Text(
                    'X',
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 64,
                      color: Colors.blue,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
