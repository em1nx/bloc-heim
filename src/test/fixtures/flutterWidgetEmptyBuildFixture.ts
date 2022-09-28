


export function flutterWidgetEmptyBuildFixture(): string {
    return `
import 'package:flutter/material.dart';

class FlutterWidget extends StatelessWidget {
  const FlutterWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    
  }
}
`.trim();
}