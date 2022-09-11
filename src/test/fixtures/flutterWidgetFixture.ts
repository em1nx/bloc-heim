


export function flutterWidgetFixture(): string {
    return `
import 'package:flutter/material.dart';

class FlutterWidget extends StatelessWidget {
  const FlutterWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.center,
      child: const Center(
        child: Text('this is my test text'),
      ),
    );
  }
}

`.trim();
}