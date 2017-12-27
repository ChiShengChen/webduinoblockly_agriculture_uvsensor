void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  float UVsensorVoltage; 
  float UVsensorValue;
  UVsensorValue = analogRead(A2);
  UVsensorVoltage = UVsensorValue/1024*3.3;
  Serial.print("UVsensor reading = ");
  Serial.print(int(UVsensorValue));
  Serial.println("");
  Serial.print("UVsensor voltage = ");
  Serial.print(int(UVsensorVoltage*100));
  Serial.println(" V");
  delay(1000);
}
