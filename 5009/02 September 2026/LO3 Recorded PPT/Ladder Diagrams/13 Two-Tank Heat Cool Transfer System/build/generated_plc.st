PROGRAM program0
  VAR
    Start : BOOL;
    Stop : BOOL;
    CycleOn : BOOL;
    InletValve : BOOL;
    LevelSensor2 : BOOL;
    Valve2 : BOOL;
    TempSensor1 : INT := 59;
    TempSensor2 : INT := 12;
    OutletValve1 : BOOL;
    OutletValve2 : BOOL;
    Heater : BOOL;
    LevelSensor4 : BOOL;
    LevelSensor1 : BOOL;
    LevelSensor3 : BOOL;
    Valve3 : BOOL;
    Cooler : BOOL;
    _TMP_LT51_OUT : BOOL;
    _TMP_GT17_OUT : BOOL;
  END_VAR

  CycleOn := NOT(Stop) AND (CycleOn OR Start);
  InletValve := NOT(Stop) AND (CycleOn OR Start);
  Valve2 := NOT(LevelSensor2) AND NOT(OutletValve1) AND CycleOn;
  _TMP_LT51_OUT := LT(TempSensor1, 60);
  Heater := CycleOn AND _TMP_LT51_OUT;
  OutletValve1 := NOT(LevelSensor1) AND NOT(Heater);
  CycleOn := NOT(Stop) AND (CycleOn OR Start);
  InletValve := NOT(Stop) AND (CycleOn OR Start);
  Valve3 := NOT(LevelSensor4) AND NOT(OutletValve2) AND CycleOn;
  _TMP_GT17_OUT := GT(TempSensor2, 10);
  Cooler := CycleOn AND _TMP_GT17_OUT;
  OutletValve2 := NOT(LevelSensor3) AND NOT(Cooler);
END_PROGRAM


CONFIGURATION Config0

  RESOURCE Res0 ON PLC
    TASK task0(INTERVAL := T#20ms,PRIORITY := 0);
    PROGRAM instance0 WITH task0 : program0;
  END_RESOURCE
END_CONFIGURATION
